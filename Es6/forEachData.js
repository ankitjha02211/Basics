let ArrayD = require("./SampleData/sampleArray");
let months = ArrayD.months;
let day = ArrayD.day;
let jsonD = ArrayD.jsonData;

months.forEach((value, index, arr) => {
  if (value == arr[index]) {
    console.log(value);
  }
});

let days = (value) => {
  console.log(value, "normal");
};

let myObj = {
  days: (value) => {
    console.log(value + 1);
  },
};

day.forEach(function (value) {
  return myObj.days(value);
});

function SumDays(value) {
  let sum = 0;
  value.forEach((val, index, arr) => {
    sum += val;
  });
  return sum;
}

console.log(SumDays(day));
