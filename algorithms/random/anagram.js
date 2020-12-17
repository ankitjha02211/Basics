//M1
// function anagrams(stringA, stringB) {
//   let word1 = stringA.toLowerCase().split("").sort().join("");
//   let word2 = stringB.toLowerCase().split("").sort().join("");
//   if (word1 == word2) {
//     return true;
//   } else {
//     return false;
//   }
// }

//M2
function anagrams(stringA, stringB) {
  let a = stringA.toLowerCase();
  let b = stringB.toLowerCase();
  let obj1 = {};
  let obj2 = {};

  for (const iterator of a) {
    obj1[iterator] = obj1[iterator] ? obj1[iterator] + 1 : 1;
  }
  for (const iterator of b) {
    obj2[iterator] = obj2[iterator] ? obj2[iterator] + 1 : 1;
  }

  if (Object.keys(obj1).length != Object.keys(obj2).length) {
    return false;
  } else {
    for (const key in obj1) {
      if (obj1[key] != obj2[key]) {
        return false;
      }
    }
  }

  return true;
}

let stringA = "Hello";
let stringB = "loleh";
let result = anagrams(stringA, stringB);
console.log(result);
