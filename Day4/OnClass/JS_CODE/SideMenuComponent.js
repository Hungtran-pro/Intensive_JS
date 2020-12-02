//HTML Template
const $template = document.createElement("template");

$template.innerHTML = /*html*/ `
    <style>
        #side-menu {
            margin: 0;
            padding: 0;
            background-color: #92f0ab;
            width: 30vw;
        }

        #side-menu li {
            list-style: none;
            height: 40px;
            line-height: 40px;
            padding: 5px;
            border-bottom: 1px solid #fafafa;
        }

        #side-menu a {
            text-decoration: none;
            color: #121212;
        }
    </style>
    <ul id="side-menu">
    <li><a href="./index.html">Index</a></li>
    <li><a href="./about.html">About</a></li>
    <li><a href="./contact-us.html">Contact us</a></li>
    <li><a href="./contact-us.html">Our forum</a></li>
    <li><a href="./contact-us.html">Blogs</a></li>
    <li><a href="./contact-us.html">Template</a></li>
    <li><a href="./contact-us.html">Template</a></li>
    </ul>
`;

export default class SideMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
  }
}

window.customElements.define("side-menu", SideMenu);
