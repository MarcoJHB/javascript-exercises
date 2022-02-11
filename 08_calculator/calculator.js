const add = function(...addArgs) {
	reducer = (accumulator, curr) => accumulator + curr;
  return addArgs.reduce(reducer);
};



const subtract = function(...subArgs) {
  reducer = (accumulator, curr) => accumulator - curr;
  return subArgs.reduce(reducer);
};

const sum = function(sumArgs) {
  reducer = (accumulator, curr) => accumulator + curr;
  return sumArgs.reduce(reducer,0);
};

const multiply = function(multiplyArgs) {
  reducer = (accumulator, curr) => accumulator * curr;
  return multiplyArgs.reduce(reducer);
};


const power = function(base, exponent) {
  return Math.pow(base,exponent);
};

const factorial = function(factorialArgs) {
let answer = 1;
if (factorialArgs == 0 || factorialArgs == 1) {
  return answer;
} else {
  for (let i = factorialArgs; i >= 1; i--) {
    answer = answer * i;
  }
  return answer;
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
