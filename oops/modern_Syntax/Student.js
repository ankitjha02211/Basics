let Person =require('./Person')

class Student extends Person{
    constructor(firstName,lastName,age){
        // super helps you pass parameters to constructor function of parent class
        super(firstName,lastName,age)
    }

    // It will use this function instead of defined in person
    calAge(){
        return 2027 - this.age
    }

    intro() {
        return `Hi i am ${this.firstName}. i am ${this.calAge()} years old`
      }
}

let crap = new Student ('crap','bag',2010);
console.log(crap.intro())

