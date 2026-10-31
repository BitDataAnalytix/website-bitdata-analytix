import { onRequestPost } from "./functions/api/contact.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Route /api/contact to the contact form handler
    if (url.pathname === "/api/contact") {
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          }
        });
      }

      if (request.method === "POST") {
        return onRequestPost({ request, env, ctx });
      }

      return new Response(JSON.stringify({ error: "Method not allowed. Use POST." }), {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Allow": "POST, OPTIONS"
        }
      });
    }

    // Serve static assets for all other paths (HTML, CSS, JS, images, fonts)
    return env.ASSETS.fetch(request);
  }
};

