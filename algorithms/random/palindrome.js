// Palindromes are strings that form the same word when reversed
// input palindrome("abba") => true
// input palindrome("abbcdef") => false

function palindrome(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

let str = "abba";
let str1 = "abcdef";
let result = palindrome(str1);
console.log(result);
