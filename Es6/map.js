let ArrayD = require("./SampleData/sampleArray");
let months = ArrayD.months;
let day = ArrayD.day;
let jsonD = ArrayD.jsonData;

let newArray = day.map((value, index, arr) => {
  return value * 4;
});

let jsonData = jsonD.map((value, index, arr) => {
  return value._id;
});

let kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

let reformattedArray = kvArray.map((obj) => {
  let rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

// console.log(jsonData);
// console.log(reformattedArray);

function pluck(array, key) {
  return array.map(function (obj) {
    return obj[key];
  });
}

console.log(pluck(jsonD, "guid"));
