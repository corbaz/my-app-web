import { serve } from "bun";
import { WebSocketServer } from "ws";
import { watch } from "fs";

const PORT = 3000;
const WS_PORT = 35729; // Puerto WebSocket para la recarga en vivo

// Crear el servidor WebSocket
const wss = new WebSocketServer({ port: WS_PORT });
wss.on("connection", (ws) => {
    console.log("Cliente conectado a WebSocket para recarga en vivo.");
    ws.send("connected"); // Mensaje de conexión inicial
});

// Función para enviar el mensaje de recarga
function broadcastReload() {
    wss.clients.forEach((client) => {
        if (client.readyState === client.OPEN) {
            client.send("reload");
        }
    });
}

// Observar archivos en ./frontend/src para cambios
watch("./frontend/src", { recursive: true }, (eventType, filename) => {
    if (filename && (filename.endsWith(".html") || filename.endsWith(".css") || filename.endsWith(".ts"))) {
        console.log(`Cambio detectado en ${filename}, recargando...`);
        broadcastReload(); // Envía la señal de recarga a todos los clientes
    }
});

// Configuración del servidor HTTP con Bun
serve({
    port: PORT,
    async fetch(request) {
        const url = new URL(request.url);

        if (url.pathname === "/") {
            // Inserta el script de recarga en vivo en index.html
            const html = await Bun.file("./frontend/src/index.html").text();
            const liveReloadScript = `<script>
        const ws = new WebSocket("ws://localhost:${WS_PORT}");
        ws.onmessage = (event) => {
          if (event.data === "reload") location.reload();
        };
      </script>`;
            return new Response(html.replace("</body>", `${liveReloadScript}</body>`), {
                headers: { "Content-Type": "text/html" },
            });
        }

        // Sirve otros archivos estáticos
        try {
            return new Response(Bun.file(`./frontend/src${url.pathname}`));
        } catch {
            return new Response("404 Not Found", { status: 404 });
        }
    },
});

console.log(`Servidor de desarrollo escuchando en http://localhost:${PORT}`);
console.log(`WebSocket de recarga en vivo en ws://localhost:${WS_PORT}`);
