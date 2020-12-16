let Person = require("./Person");

function Teacher(firstName, lastName, age, gender) {
  Person.call(this, firstName, lastName, age);
  this.gender = gender;
}

Teacher.prototype = Object.create(Person.prototype)

let crapTeacher = new Teacher("crap", "bag", 2010, "Male");
console.log(crapTeacher.calAge());