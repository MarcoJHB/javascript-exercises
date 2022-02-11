const leapYears = function (leapYear) {
  // if divisible by 400 - true
  if (leapYear % 400 == 0) {
    return true;
    // but if divisible by 100 - false
  } else if (leapYear % 100 == 0) {
    return false;
    // but if divisible by 4 - true
  } else if (leapYear % 4 == 0) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = leapYears;
