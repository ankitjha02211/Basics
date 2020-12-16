function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
};

Person.prototype.calAge = function () {
  return 2037 - this.age;
};

module.exports = Person