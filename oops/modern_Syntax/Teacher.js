let Person = require("./Person");

class Teacher extends Person {
  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
  }

  intro() {
    return`Hi i am your new Teacher Mr ${this.firstName}.i am ${this.calAge()} years old`
  }
}

let crapTeacher = new Teacher ('crap','bag',2010);
console.log(crapTeacher.intro())
