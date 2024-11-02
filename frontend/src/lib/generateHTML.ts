// generate.ts
import { importHTML } from "./importHTML";

// Obtén el nombre del archivo desde los argumentos de la línea de comandos
const templateName = process.argv[2]; // El primer argumento después de `bun generate.ts`

if (templateName) {
    // Llama a `importHTML` usando el nombre de plantilla proporcionado
    importHTML(templateName);
} else {
    console.error("Por favor, proporciona el nombre del archivo HTML (sin extensión) como argumento.");
}
