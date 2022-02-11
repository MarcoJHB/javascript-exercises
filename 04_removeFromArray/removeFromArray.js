const removeFromArray = function (arr, ...forRemoval) {
  let newArray = arr;
  newArray = newArray.filter((item) => !forRemoval.includes(item));
  return newArray;
};

// removeFromArray([1,2,3,4,5,6,7,8,9],8,1,2);

// Do not edit below this line
module.exports = removeFromArray;
