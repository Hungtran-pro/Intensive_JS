import Information from "./Information.js";
import Student from "./Students.js";
import Teacher from "./Teachers.js";
import ClassName from "./ClassName.js";

export default class ClassManager {
  name;
  teacher;
  students;
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addTeacher(teacher) {
    if (teacher instanceof Teacher) {
      this.teacher = teacher;
    }
  }

  showTeacher(){
    console.log(this.teacher);
  }

  addStudent(student) {
    if (student instanceof Student) {
      this.students.push(student);
    } else console.log(student);
  }

  deleteStudentByCode(code) {
    for(let i = 0; i < this.students.length; i++){
      if(this.students[i].code === code){
        this.students.splice(i, 1);
      }
    }
    this.showStudentList();
  }

  showStudentList() {
    console.log(this.students);
  }
//Có thể làm theo cách for cổ điển nhưng đang tìm giải pháp khác :V
  fixStudent(code, name, age, schoolYear) {
    for(let student of this.students){
      if(student.code === code){
        student.name = name;
        student.age = age;
        student.schoolYear = schoolYear;
      }
    }
    this.showStudentList();
  }

  findStudentByCode(codeStudent) {
    let FoundStudent = () => {
      return this.people.filter((Student) => Student.code == codeStudent);
      if (FoundStudent == null) {
        FoundStudent = "Không tìm thấy";
      }
    };
  }

  findStudentByName(name) {
    let StudentList = [];
    for (let student of this.students) {
      if (student.name === name) {
        StudentList.push(student);
      }
    }
    console.log(StudentList);
  }
}

let NgocHoi = new ClassManager("Ngoc Hoi");
console.log(NgocHoi.name);
let Teacher1 = new Teacher("U30", "Quynh", 32, "Thạc Sĩ");
let Person1 = new Student("B19", "Hung", 20, "2020");
let Person2 = new Student("B20", "Khanh", 20, "2020");
let Person3 = new Student("B19", "Tran", 20, "2020");
let Person4 = new Student("B19", "Chau", 20, "2020");

NgocHoi.addTeacher(Teacher1);
NgocHoi.addStudent(Person1);
NgocHoi.addStudent(Person2);
NgocHoi.addStudent(Person3);
NgocHoi.addStudent(Person4);
NgocHoi.showStudentList();
NgocHoi.showTeacher();
// NgocHoi.deleteStudentByCode("B20");
NgocHoi.fixStudent("B20", "Khanhasdasd", 20, "2020");
NgocHoi.findStudentByName('Chau');