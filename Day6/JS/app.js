import data from "./fakeData.js";
// ** Create

function addData() {
  for (let item of data) {
    firebase.firestore().collection("film").add({
      rate: item.rate,
      ID: item.ID,
      relDay: item.relDay,
      name: item.name,
      image: item.image,
      descrtp: item.description,
    });
  }
}

// addData();

// ** Read

// * Read one

async function readOne(id) {
  let result = await firebase.firestore().collection("users").doc(id).get();
  console.log(result.data());
}

// readOne('oAwfHGLKcLSZ55kLdUkI');

// * ReadAll

async function readAll() {
  let result = await firebase.firestore().collection("users").get();
  console.log(result.docs);
  result.docs.forEach(function (doc) {
    console.log(doc.id, doc.data());
  });
}

// readAll();

// * Read by condition

async function readByCondition() {
  let result = await firebase
    .firestore()
    .collection("users")
    .where("age", "<=", 20)
    .get();
  console.log(result);

  result.docs.forEach(function (doc) {
    console.log(doc.data());
  });
}

// readByCondition();

// ** Update

function updateData(id) {
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .update({
      age: 1000,
      address: "TB",
      favorites: ["music", "sport"],
    });
}

// updateData("xHZ1LLprjCSOFp4bC8Hu");

// ** Delete

function deleteData(id) {
  firebase.firestore().collection("users").doc(id).delete();
}

// deleteData('xHZ1LLprjCSOFp4bC8Hu');
