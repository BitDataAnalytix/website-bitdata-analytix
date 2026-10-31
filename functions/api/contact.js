// Cloudflare Pages / Workers Serverless Function for Contact Form
// Endpoint: POST /api/contact

export async function onRequestPost(context) {
  const { request, env } = context;

  // Handle CORS preflight if needed
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json"
  };

  try {
    const data = await request.json();
    const { name, email, phone, org, interest, msg } = data || {};

    if (!name || !email || !msg) {
      return new Response(JSON.stringify({ error: "Missing required fields (Name, Email, Message)" }), {
        status: 400,
        headers: corsHeaders
      });
    }

    // Check for Resend API key
    if (!env.RESEND_API_KEY) {
      console.warn("Contact submission received, but RESEND_API_KEY is missing in Cloudflare environment variables.");
      return new Response(JSON.stringify({
        error: "RESEND_API_KEY is not configured in Cloudflare. Please add it to your Cloudflare Variables & Secrets."
      }), {
        status: 500,
        headers: corsHeaders
      });
    }

    // Email sender and recipient configuration:
    // Override via Cloudflare Environment Variables: NOTIFICATION_EMAIL and RESEND_FROM_EMAIL (or RESEND_FROM_EMAI)
    const fromAddress = env.RESEND_FROM_EMAIL || env.RESEND_FROM_EMAI || "BitData Website <onboarding@resend.dev>";
    const recipient = env.NOTIFICATION_EMAIL || "contact@bitdataanalytix.com";

    // Send email using Resend API
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipient],
        reply_to: email,
        subject: `New Website Enquiry: ${name} (${interest || "General Enquiry"})`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #0E2242; max-width: 600px;">
            <h2 style="color: #1B3B6F; border-bottom: 2px solid #FE7005; padding-bottom: 8px;">New Website Enquiry</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; width: 140px; font-weight: bold; color: #555;">Full Name:</td><td style="font-size: 16px;">${name}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Work Email:</td><td><a href="mailto:${email}" style="color: #0A66C2;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td><td>${phone || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td><td>${org || "Not provided"}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold; color: #555;">Interest:</td><td><strong>${interest || "General Enquiry"}</strong></td></tr>
            </table>
            <h3 style="color: #1B3B6F; margin-bottom: 8px;">Message:</h3>
            <div style="background: #F5F7FB; border-left: 4px solid #FE7005; padding: 14px 18px; border-radius: 4px; white-space: pre-wrap; font-size: 15px;">${msg}</div>
            <p style="margin-top: 24px; font-size: 12px; color: #888;">Sent from bitdataanalytix.com contact form</p>
          </div>
        `
      })
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend delivery failed:", errText);
      let errMsg = "Email delivery failed via Resend.";
      try {
        const parsed = JSON.parse(errText);
        if (parsed.message) {
          errMsg = parsed.message;
        }
      } catch (e) {}

      return new Response(JSON.stringify({ error: errMsg }), {
        status: 502,
        headers: corsHeaders
      });
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Thank you! Your message has been sent to the BitData team. We will reply within one business day."
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || "Server error" }), {
      status: 500,
      headers: corsHeaders
    });
  }
}
