module.exports = class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  calAge(){
    return 2037 - this.age
}
}


