function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}
let arr = [8, 1, 2, 3, 4, 5, 6, 7];
let result = selectionSort(arr);
console.log(result);
