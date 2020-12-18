// function capitalize(str) {
//   let words = [];

//   for (const word of str.split(" ")) {
//     let newWord = word[0].toUpperCase() + word.slice(1);
//     words.push(newWord);
//   }
//   return words.join(" ");
// }

//M2
function capitalize(str) {
  let Result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] == " " || i == 0) {
        Result += str[i].toUpperCase()
    } else {
        Result += str[i]
    }
  }
  return Result
}

let str = "Test1 is for logic and Test 2 is for performance";
let result = capitalize(str);
console.log(result);
