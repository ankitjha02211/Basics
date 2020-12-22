function binarySearch(arr, elem) {
  var start = 0; //starting index
  var end = arr.length - 1; //last index
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    //ends when element is found of start > end
    if (elem < arr[middle]) end = middle - 1;
    //if element is less than array mid element then the end  shifts to mid -1
    else start = middle + 1;
    middle = Math.floor((start + end) / 2); // calculate mid
  }
  return arr[middle] === elem ? middle : -1; //-1 signifies not found
}

let result = binarySearch([1, 2, 3, 4, 5], 2);
console.log(result);
