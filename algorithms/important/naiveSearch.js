function naiveStringSearch(long, short) {
  var count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      console.log(j, i + j);
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

let result = naiveStringSearch("lorie loled", "lol");
console.log(result);
