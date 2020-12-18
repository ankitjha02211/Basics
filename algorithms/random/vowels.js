function vowels(x) {
  let obj = {};
  for (let i = 0; i < x.length; i++) {
    if (
      x[i] == "a" ||
      x[i] == "e" ||
      x[i] == "i" ||
      x[i] == "o" ||
      x[i] == "u"
    ) {
      obj["vowel"] = obj['vowel'] ? obj['vowel'] + 1 : 1;
    }
  }
  return obj["vowel"];
}
let x = "aeiouz";
let results = vowels(x);
console.log(results);
