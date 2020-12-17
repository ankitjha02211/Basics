function fizzBuzz(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 3 == 0 || i % 5 == 0 || (i % 5 == 0 && i > 0 && i % 3 == 0)) {
      if (i > 0 && i % 3 == 0 && i % 5 != 0) {
        console.log("fizz");
      }
      if (i > 0 && i % 5 == 0 && i % 3 != 0) {
        console.log("buzz");
      }
      if (i > 0 && i % 5 == 0 && i % 3 == 0) {
        console.log("fizzbuzz");
      }
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
