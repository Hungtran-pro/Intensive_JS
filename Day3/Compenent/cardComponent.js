const style = `
    <style>
    .card{
        font-family: sans-serif;
        border: #323b34 solid 1px;
        margin-right: 20px;
    }
    .title{
        font-size: 1.5rem;
        font-weight: 600;
    }
    .card-body{
        border: #323b34 solid 1px;
        padding: 20px;
    }
    .card > img {
        width: 20vw;
        height: 20vw;
    }
    .title, .description {
        text-align: center;
    }
    </style>
`

class CardComponent extends HTMLElement {
  constructor() {
    super();
    //khai bao shadow_dom
    this._shadowDom = this.attachShadow({ mode: "open" });
    this.imgSrc = this.getAttribute('imgSrc');
    this.tle = this.getAttribute('tle');
    this.description = this.getAttribute('dcrp');
    this._shadowDom.innerHTML = `
        ${style}
        <div class="card">
            <img src="${this.imgSrc}">
            <div class='card-body'>
                <div class="title">${this.tle} </div>
                <div class="description">${this.description} </div>
            </div>
        </div>
        `;
  }
}
window.customElements.define('card-container', CardComponent);
