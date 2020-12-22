function bubbleSort(arrayData) {
  for (var i = arrayData.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr = [8, 1, 2, 3, 4, 5, 6, 7];
let result = bubbleSort(arr);
console.log(result);
