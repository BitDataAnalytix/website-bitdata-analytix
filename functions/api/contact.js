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

    // Email configuration:
    // To enable automatic email delivery, add RESEND_API_KEY in Cloudflare Dashboard:
    // Settings -> Variables and Secrets -> Add RESEND_API_KEY
    if (env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          from: "BitData Website <onboarding@resend.dev>", // Or your verified domain: website@bitdataanalytix.com
          to: ["contact@bitdataanalytix.com"],
          reply_to: email,
          subject: `New Enquiry: ${name} (${interest || "General Enquiry"})`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #0E2242;">
              <h2 style="color: #1B3B6F;">New Website Enquiry from bitdataanalytix.com</h2>
              <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <tr><td style="padding: 6px 0; width: 140px; font-weight: bold;">Full Name:</td><td>${name}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Work Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td>${phone || "Not provided"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Company:</td><td>${org || "Not provided"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Interest:</td><td>${interest || "General Enquiry"}</td></tr>
              </table>
              <h3 style="color: #1B3B6F; margin-bottom: 8px;">Message:</h3>
              <div style="background: #F5F7FB; border-left: 4px solid #FE7005; padding: 14px 18px; border-radius: 4px; white-space: pre-wrap;">${msg}</div>
            </div>
          `
        })
      });

      if (!resendRes.ok) {
        const err = await resendRes.text();
        console.error("Resend delivery failed:", err);
        return new Response(JSON.stringify({ error: "Email delivery failed. Please email us directly." }), {
          status: 502,
          headers: corsHeaders
        });
      }
    } else {
      // If RESEND_API_KEY is not yet configured, log submission to Cloudflare logs
      console.log("Contact submission received (add RESEND_API_KEY to send emails):", JSON.stringify({
        name, email, phone, org, interest, msg, date: new Date().toISOString()
      }));
    }

    return new Response(JSON.stringify({
      success: true,
      message: "Thank you! Your message has been received."
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

