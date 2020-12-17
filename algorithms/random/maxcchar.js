// Given a string return the character that is most commonly used in the string.
// maxChar("abcccccccd") ==="c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxchar = "";
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
  }

  for (let objE in obj) {
    if (obj[objE] > max) {
      max = obj[objE];
      maxchar = objE;
    }
  }

  return maxchar;
}

let char1 = "abcccccccd";
let chaer2 = "apple 1231111";
let result = maxChar(chaer2);
console.log(result);
