// src/components/Header.ts
import { htmlContent } from "../templates/Header";

function Header(): DocumentFragment {
    const template = document.createElement("template");
    template.innerHTML = htmlContent;
    return template.content;
}

export default Header;
