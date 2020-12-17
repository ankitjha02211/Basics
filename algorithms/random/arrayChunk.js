function chunk(arr, num) {
  let arr_Result = [];
  for (let i = 0; i < arr.length; ) {
    let x = i + num;
    arr_Result.push(arr.slice(i, x));
    i = i + num;
  }
  return arr_Result;
}

//M2
// function chunk(array, size) {
//   let chunked = [];
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//     console.log(chunked.length - 1,last,"last")
//     if(!last||last.length===size){
//       console.log("if")
//       chunked.push([element])
//     }else{
//       console.log("else")
//       last.push(element)
//     }
//   }
//   return chunked;
// }

let arr = [1, 2, 3, 4,5,6,7,8,9];
let num = 3;
let result = chunk(arr, num);
console.log(result);
