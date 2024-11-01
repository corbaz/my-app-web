import { serve } from "bun";
serve({
  port: 3000,
  fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return new Response(JSON.stringify({ message: "Hello from API!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
    return new Response("Not found", { status: 404 });
  },
});
