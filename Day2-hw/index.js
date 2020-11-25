class Students {
  classname;
  fname;
  lname;
  age;
  hometown;
  constructor(classname, fname, lname, age, hometown) {
    this.classname = classname;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.hometown = hometown;
  }
  update(classname, fname, lname, age, hometown) {
    this.classname = classname;
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.hometown = hometown;
  }
  //   toLowerCase(){
  //       return this.hometown.toLowerCase();
  //   }
  toHTML() {
    return `<div class = "container">
            <div class="inforStudent">
                <div>${this.classname}</div>
                <div>${this.fname}</div>
                <div>${this.lname}</div>
                <div>${this.age}</div>
                <div>${this.hometown}</div>
            </div>
        </div>
        `;
  }
}

class ListStudents {
  listStudents;
  constructor() {
    this.listStudents = [];
  }
  addStudent(student) {
    this.listStudents.push(student);
  }
  removeStudent(index) {
    this.listStudents.slice(index, 1);
  }
  showIndexOfStudent(index) {
    document.querySelector(".list").innerHTML = this.listStudents[
      index
    ].toHTML();
  }
  showStudent() {
    for (let i = 0; i < this.listStudents.length; i++) {
      let listInHTML = document.querySelector(".list");
      let tempStudent = this.listStudents[i].toHTML();
      console.log(tempStudent);
      listInHTML.innerHTML += tempStudent;
    }
  }
  findAge(age) {
    for (let i = 0; i < this.listStudents.length; i++) {
      if (this.listStudents[i].age === age) {
        this.showStudent(i);
      }
    }
  }
  findAge18() {
    let count = 0;
    let countAge = 0;
    let countHomeTown = 0;
    for (let i = 0; i < this.listStudents.length; i++) {
      let check = 0;
      if (this.listStudents[i].age === 18) {
        countAge++;
        check++;
      }
      if (this.listStudents[i].hometown.toLowerCase() === "hanoi") {
        countHomeTown++;
        check++;
      }
      if (check == 2) count++;
    }
    console.log(`Số học sinh 18 tuổi là ${countAge}`);
    console.log(`Số học sinh quê ở Hà Nội là ${countHomeTown}`);
    console.log(`Số học sinh 18 tuổi và quê ở Hà Nội là ${count}`);
  }
  findStudentsByName(fname, lname) {
    for (let i = 0; i < this.listStudents.length; i++) {
      if (
        this.listStudents[i].fname.toLowerCase() === fname.toLowerCase() &&
        this.listStudents[i].lname.toLowerCase() === lname.toLowerCase()
      ) {
        this.showIndexOfStudent(i);
      }
    }
  }
}

let listStudents = new ListStudents();
const student1 = new Students("12A2", "hung", "tran", 15, "HaNoi");
const student2 = new Students("10A2", "A", "B", 15, "HaNoi");
listStudents.addStudent(student1);
listStudents.addStudent(student2);
listStudents.findAge18();
// listStudents.findStudentsByName("HUng", "tran");
listStudents.showStudent();
// console.log(document.querySelector(".list").innerHTML);
