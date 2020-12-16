let Person = require("./Person");

function Student(firstName, lastName, age, gender) {
  Person.call(this, firstName, lastName, age);
  this.gender = gender;
}

Student.prototype = Object.create(Person.prototype); //inheritance takes place in this step

Student.prototype.calAge = function () {  //Student uses its own calAge function rather than persons calAge
    return 2017 - this.age;
  };


let crap = new Student("crap", "bag", 2010, "Male");
console.log(crap.calAge());
