import {Students} from './Students.js'
import {ListStudents} from './StudentLists.js'

let listStudents = new ListStudents();
const student1 = new Students("12A2", "hung", "tran", 15, "HaNoi");
const student2 = new Students("10A2", "A", "B", 15, "HaNoi");
const student3 = new Students("12A2", "C", "D", 18, "HaNoi");
const student4 = new Students("10A2", "E", "F", 18, "HaNoi");
listStudents.addStudent(student1);
listStudents.addStudent(student2);
listStudents.addStudent(student3);
listStudents.addStudent(student4);
listStudents.findAge18();
// listStudents.findStudentsByName("HUng", "tran");
listStudents.showStudent();
// console.log(document.querySelector(".list").innerHTML);
