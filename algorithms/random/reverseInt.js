// Given an integer ,return an integer that is the reverse ordering of numbers

// reverseInt(51) ==> 15
// reverseInt(-15) ==> -51

function reverseInt(num) {
  if (num === 0) {
    return 0;
  }
  if (num > 0) {
    let str = String(num);
    return parseInt(str.split("").reverse().join(""));
  } else {
    let str = String(num);
    return parseInt(str.split("").reverse().join("")) * Math.sign(num);
  }
}

let num = 20;
let num1 = -35;
let result = reverseInt(num1);
console.log(result);
