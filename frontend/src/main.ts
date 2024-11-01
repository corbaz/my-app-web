import HTML from "./components/Header";

const app = document.getElementById("app");

function htmls(fragment: DocumentFragment): string {
  const container = document.createElement("div");
  container.appendChild(fragment.cloneNode(true)); // Clona para no modificar el original
  return container.innerHTML;
}

if (app) {
  app.appendChild(HTML);
  // app.innerHTML = "<div>Proyecto Fullstack con TypeScript y Bun</div>";
  // app.className = "text-purple-500 text-3xl text-center";
}
