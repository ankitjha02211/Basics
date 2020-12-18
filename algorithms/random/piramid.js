function pyramid(n) {
  for (let i = 0; i < n; i++) {
    let string1 = "";
    for (let j = 0; j < 2 * (n - 1); j++) {
      const midpoint = Math.floor((2 * n - 1) / 2);
      if (midpoint - i <= j && midpoint + i >= j) {
          string1 +="#"
      } else {
          string1 +=" "
      }
    }
    console.log(string1);
  }
}

let test = pyramid(7);
console.log(test);
