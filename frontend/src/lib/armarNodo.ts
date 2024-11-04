function Nodo(HTML:string): DocumentFragment {
    const template = document.createElement("template");
    template.innerHTML = HTML;
    return template.content;
}
export default Nodo;