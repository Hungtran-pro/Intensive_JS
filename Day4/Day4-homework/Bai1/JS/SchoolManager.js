import Information from "./Information.js";
import Student from "./Students.js";
import Teacher from "./Teachers.js";
import ClassName from "./ClassName.js";

export default class SchoolManager {
  name;
  teacher;
  people;
  constructor(name) {
    this.name = name;
    this.people = [];
  }
}

let NgocHoi = new SchoolManager("Ngoc Hoi");
console.log(NgocHoi.name);