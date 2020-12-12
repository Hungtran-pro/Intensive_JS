import ItemContainer from "./IteamContainerComponent.js";
import ItemList from "./ItemListComponent.js";
import data from "./fakeData.js";

let $root = document.getElementById("root");

// console.log(data);
// console.log("ở đây là dữ liệu" + JSON.stringify(data));
// console.log("ở đây là dữ liệu" + data);

// let json = JSON.stringify(data);
// $root.innerHTML = `<item-list data = "${JSON.stringify(data)}"></item-list>`;

let $itemList = new ItemList(data);
// $itemList.setAttribute("data", JSON.stringify(data));
$root.appendChild($itemList);
