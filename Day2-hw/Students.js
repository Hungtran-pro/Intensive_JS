export class Students {
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
      return `<tr>
                  <td>${this.classname}</td>
                  <td>${this.fname}</td>
                  <td>${this.lname}</td>
                  <td>${this.age}</td>
                  <td>${this.hometown}</td>
              </div>
          <tr>
          `;
    }
  }