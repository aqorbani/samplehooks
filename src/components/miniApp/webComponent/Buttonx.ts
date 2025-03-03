class ButtonX extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const button = document.createElement("button");
    button.textContent = this.getAttribute("label") || "Default Label";
    button.style.backgroundColor = this.getAttribute("color") || "blue";
    this.shadowRoot?.appendChild(button);
  }
}

customElements.define("button-x", ButtonX);
export {};
