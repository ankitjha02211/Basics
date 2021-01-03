class Stack {
  constructor(array) {
    this.array = array;
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
}
let array = [];
let result = new Stack(array);

result.push(3);
result.push(4);
result.pop();

console.log(result);
