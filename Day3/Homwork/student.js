const style = `
<style>
.card {
    weight: 15vw;
    height: 15vw;
    font-family: sans-serif;
    margin: 0px 20px;
    text-align: center;
} 
</style>
`


class CardComponent extends HTMLElement {
  constructor() {
    super();
    this._shadowDom = this.attachShadow({ mode: "open" });
    this.classname = this.getAttribute("classname");
    this.fullname = this.getAttribute("fname");
    this.age = this.getAttribute("age");
    this.address = this.getAttribute("add");
    this._shadowDom.innerHTML = `
        ${style}
        <div class="card">
            <div class="card-body>
            <div class="fname">${this.fullname}</div>
            <div class="age">${this.age}</div>
            <div class="classname">${this.classname}</div>
            <div class="address">${this.address}</div>
            </div>
        </div>
    `;
  }
}
window.customElements.define("card-container", CardComponent);