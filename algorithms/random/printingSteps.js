// function steps(num) {
//   for (let i = 0; i < num; i++) {
//     let data = "";
//     for (let j = 0; j < num; j++) {
//       if (j > i) {
//         data += " ";
//       } else {
//         data += "#";
//       }
//     }
//     console.log(data);
//   }
//   return ;
// }

//M2
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if (stair.length<=row) {
      stair +="#"
  } else {
    stair +=" "
  }
  steps(n, row, stair);
}

let result = steps(5);
console.log(result);
