const sumAll = function (a, b) {
  let sumTotal = 0;
  if (
    a < 0 ||
    isNaN(a) ||
    isNaN(b) ||
    typeof a === "string" ||
    typeof b === "string"
  ) {
    return "ERROR";
  }
  if (a < b) {
    sumTotal = a;
  } else sumTotal = b;

  if (a < b) {
    for (let i = 0; i <= b; i++) {
      sumTotal += i;
    }
    return sumTotal - 1;
  } else {
    for (let i = 0; i <= a; i++) {
      sumTotal += i;
    }
    return sumTotal - 1;
  }
};

// Do not edit below this line
module.exports = sumAll;
