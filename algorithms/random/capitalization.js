function capitalize(str) {
  let words = [];

  for (const word of str.split(" ")) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    words.push(newWord);
  }
  return words.join(" ");
}

let str = "Test1 is for logic and Test 2 is for performance";
let result = capitalize(str);
console.log(result);
