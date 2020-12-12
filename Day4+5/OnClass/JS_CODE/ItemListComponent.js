import data from "./fakeData.js";
import ItemContainer from "./IteamContainerComponent.js";

const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
  <style>
    #item-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    item-container {
      margin: 10px;
    }
  </style>
  <div id="item-list"></div>
`;

export default class ItemList extends HTMLElement {
  constructor(data) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.$itemList = this.shadowRoot.getElementById("item-list");
    this.setAttribute("data", JSON.stringify(data));
  }

  static get observedAttributes() {
    return ["data"];
  }

  attributeChangedCallback(attriName, oldValue, newValue) {
    console.log(JSON.parse(newValue));
    // console.log(attriName);
    if (attriName == "data") {
      let data = JSON.parse(newValue);
      for (let item of data) {
        let $itemContainer = new ItemContainer(
          item.image,
          item.price,
          item.description,
          item.address
        );
        // $itemContainer.setAttribute('image', item.image);
        // $itemContainer.setAttribute('desciption', item.description);
        // $itemContainer.setAttribute('price', item.price);
        // $itemContainer.setAttribute('address', item.address);
        this.$itemList.appendChild($itemContainer);
      }
    }
  }
}

window.customElements.define("item-list", ItemList);
