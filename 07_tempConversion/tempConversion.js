const ftoc = function (f) {
  //convert fahrenheit to celsius
  celsius = (f - 32) * (5 / 9);
  return Math.round(celsius * 10) / 10;
};

const ctof = function (c) {
  //convert celsius to fahrenheit
  fahrenheit = c * (9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
