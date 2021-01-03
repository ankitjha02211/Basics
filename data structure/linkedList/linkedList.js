// va single node consist a value and pointer to the next

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.head.next = newNode;
      this.tail = newNode;
    }
  }
}

let result = new linkedList();
result.push(10);

console.log(result);
9643769138