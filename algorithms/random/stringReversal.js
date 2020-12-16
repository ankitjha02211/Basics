// Given a string ,return a new string with the reversed order of characters

// INPUT --> reverse('apple')  OUTPUT --> elppa

// M1
function reverse(str) {
  return str.split("").reverse().join("");
}

// M2
function reverse(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// M3

function reverse(str) {
  return str.split("").reduce((reversed, char) => {
    return char + reversed;
  }, "");
}

let str = "apple";
let result = reverse(str);
console.log(result);
