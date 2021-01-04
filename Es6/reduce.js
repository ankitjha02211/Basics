function balanceParams(data) {
  return !data.split("").reduce((acc, value) => {
    if (acc < 0) {
      return acc;
    }
    if (value === "(") return ++acc;
    if (value === ")") return --acc;
  }, 0);
}

//console.log(balanceParams("((()))"));

var desks = [
  { type: "sitting" },
  { type: "standing" },
  { type: "sitting" },
  { type: "sitting" },
  { type: "standing" },
];

var deskTypes = desks.reduce(
  function (acc, value) {
    console.log(value.type == "sitting");
    if (value.type == "sitting") {
      ++acc.sitting;
      return acc;
    }
    if (value.type == "standing") {
      ++acc.standing;
      return acc;
    }
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);

var number = [1, 1, 1, 4, 5, 6, 6, 6, 7, 4];
function unique(array) {
  return array.reduce((acc, value) => {
    if (acc.indexOf(value) == -1) {
      acc.push(value);
      return acc;
    }
    return acc;
  }, []);
}

console.log(unique(number));
