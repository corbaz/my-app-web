// frontend/src/lib/generarHTML.ts
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, basename } from "path";

/**
 * Lee todos los archivos HTML en la carpeta templates 
 * y genera un archivo TypeScript
 * en la carpeta components para cada uno con el contenido HTML embebido.
 */
export function importAllHTML(): void {
    const templatesDir = join(__dirname, "../templates");

    const outputDir = join(__dirname, "../components");
    // Verifica si el directorio de salida existe; si no, créalo
    if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
        console.log(`Directorio ${outputDir} ha sido creado.`);
    }

    // Lee todos los archivos en la carpeta templates
    const files = readdirSync(templatesDir);

    files.forEach((file) => {
        if (file.endsWith(".html")) {
            const templateName = basename(file, ".html"); // Nombre del archivo sin extensión
            //console.log(`Nombre del archivo HTML: ${templateName}`);
            const htmlPath = join(templatesDir, file);
            // console.log(`Ruta completa de ${templateName}.html:`, htmlPath);


            try {
                // Lee el contenido del archivo HTML
                const htmlContent = readFileSync(htmlPath, "utf-8").trim();
                //console.log(`Contenido HTML de ${templateName}:`, htmlContent);

                // Define la ruta del archivo TypeScript de salida en `src/components`
                const outputPath = join(outputDir, `${templateName}.ts`);
                const fileContent = `const ${templateName} = \`\n${htmlContent}\`;\nexport default ${templateName};`;

                // Escribe el archivo TypeScript
                writeFileSync(outputPath, fileContent);
                // console.log(`${templateName}.ts ha sido creado en la carpeta components con el contenido de ${templateName}.html.`);
            } catch (error) {
                console.error(`Error al procesar ${templateName}.html:`, error);
            }
        }
    });
}

importAllHTML();