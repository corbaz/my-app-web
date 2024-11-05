// frontend/src/main.ts
import Nodo from "./lib/armarNodo";
import Nav  from "./components/Nav";
import Section from "./components/Section";
import Footer from "./components/Footer";


const app = document.getElementById("app");

// function htmls(fragment: DocumentFragment): string {
//   const container = document.createElement("div");
//   container.appendChild(fragment.cloneNode(true)); // Clona para no modificar el original
//   return container.innerHTML;
// }

if (app) {
  // app.innerHTML = "<div>Proyecto Fullstack con TypeScript y Bun</div>";
  // app.className = "text-purple-500 text-3xl text-center";
  app.appendChild(Nodo(Nav));
  app.appendChild(Nodo(Section));
  app.appendChild(Nodo(Footer));
  console.log("Se ha cargado el contenido en el elemento -> ID 'app'");
}
