function chunk(arr, num) {
  let arr_Result = [];
  for (let i = 0; i < arr.length; ) {
    let x = i + num ;
    arr_Result.push(arr.slice(i, x));
    i = i + num ;
  }
  return arr_Result;
}

let arr = [1, 2, 3,4];
let num = 3;
let result = chunk(arr, num);
console.log(result);
