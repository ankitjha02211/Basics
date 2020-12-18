// function vowels(x) {
//   let obj = {};
//   for (let i = 0; i < x.length; i++) {
//     if (
//       x[i] == "a" ||
//       x[i] == "e" ||
//       x[i] == "i" ||
//       x[i] == "o" ||
//       x[i] == "u"
//     ) {
//       obj["vowel"] = obj["vowel"] ? obj["vowel"] + 1 : 1;
//     }
//   }
//   if (obj["vowel"] == undefined) {
//     obj["vowel"] = 0;
//   }
//   return obj["vowel"];
// }
//M2
function vowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}
let x = "aeiouz";
let results = vowels(x);
console.log(results);
