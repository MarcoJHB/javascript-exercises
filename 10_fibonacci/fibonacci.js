const fibonacci = function (str) {
  let number = parseInt(str);

  // prevent 1 from returning undefined
  if (number == 1) {
    return 1;
  }
  // prevent negative numbers
  if (number < 0) {
    return "OOPS";
  }

  //fibonacci sequence
  let n1 = 0,
    n2 = 1,
    nextTerm;

  for (let i = 1; i < number; i++) {
    // f(next term) = f(n-1) + f(n-2) 
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }

  return nextTerm;
};

// console.log(fibonacci("1"));

// Do not edit below this line
module.exports = fibonacci;
