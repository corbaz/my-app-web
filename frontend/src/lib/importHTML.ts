// src/lib/importHTML.ts
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

/**
 * Lee un archivo HTML y genera un archivo TypeScript con el contenido HTML embebido
 * en la misma carpeta `templates` con el mismo nombre pero con extensión `.ts`.
 * @param templateName Nombre del archivo HTML sin extensión.
 */
export function importHTML(templateName: string): void {
    const htmlPath = join(__dirname, "../templates", `${templateName}.html`);
    console.log("Ruta completa del HTML:", htmlPath);

    try {
        // Lee el contenido del archivo HTML
        const htmlContent = readFileSync(htmlPath, "utf-8").trim();
        console.log("Contenido HTML:", htmlContent);

        // Ruta del archivo TypeScript generado en `src/templates`
        const outputPath = join(__dirname, "../templates", `${templateName}.ts`);

        // Genera el contenido de TypeScript con el HTML embebido
        const fileContent = `export const htmlContent = \`${htmlContent}\`;`;

        // Escribe el archivo TypeScript
        writeFileSync(outputPath, fileContent);
        console.log(`${templateName}.ts ha sido creado en la carpeta templates con el contenido de ${templateName}.html.`);
    } catch (error) {
        console.error(`Error al leer ${templateName}.html:`, error);
    }
}
