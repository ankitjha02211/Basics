// Given a string ,return a new string with the reversed order of characters

// INPUT --> reverse('apple')  OUTPUT --> elppa

function reverse(str) {
  return str.split("").reverse().join("");
}

let str = "apple";
let result = reverse(str);
console.log(result);
