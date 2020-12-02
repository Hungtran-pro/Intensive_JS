import Person from "./Person.js";

export default class Boy extends Person {
  beauty;
  constructor(name, age, beauty) {
    super(name, age);
    this.beauty = beauty;
  }
}
