const $template = document.createElement("template");
$template.innerHTML = /*html*/ `
    <style>
        #item-container {
            width: 30vw;
            border: 3px solid #5077b5;
        }

        #item-container img{
            width: 30vw;
        }

        #price {
            font-weight: bold;
        }

        #description {
            font-style: italic;
        }
    </style>
    <div id="item-container">
        <img id="image" src="" >
        <div id="price">10 &#8363;</div>
        <div id="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <div id="address">Hà Nội </div> 
    </div>
`;

export default class ItemContainer extends HTMLElement {
  constructor(image, price, description, address) {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild($template.content.cloneNode(true));
    this.setAttribute('image', image);
    this.setAttribute('price', price);
    this.setAttribute('description', description);
    this.setAttribute('address', address);
  }
  // Định nghĩa những thuốc tính có ảnh hưởng đến nội dung
  static get observedAttributes() {
    return ["image", "price", "description", "address"];
  }

  // Được chạy khi giá trị thuộc tính thay đổi
  attributeChangedCallback(attrName, oldValue, newValue) {
    console.log(attrName + " = " + newValue);
    switch (attrName) {
      case "image":
        this.shadowRoot.getElementById("image").src = newValue;
        break;
      case "price":
        this.shadowRoot.getElementById("price").innerHTML = newValue + "&#8363";
        break;
      case "description":
        this.shadowRoot.getElementById("description").innerHTML = newValue;
        break;
      case "address":
        this.shadowRoot.getElementById("address").innerHTML = newValue;
        break;
    }
  }
}

window.customElements.define("item-container", ItemContainer);
