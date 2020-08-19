//Test Assertion Functions
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i] || typeof arrayOne[i] !== typeof arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅ Assertion Pased: ${arrayOne} === ${arrayTwo} ✅`);
  } else {
    console.log(`❌ Assertion Failed: ${arrayOne} !== ${arrayTwo} ❌`);
  }
};

//Actual Function
const middle = function(array) {
  let middle = [];
  if (array.length <= 2) {
    return middle;
  } else if (array.length % 2 !== 0) {
    middle.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    middle.push(array[Math.floor((array.length - 1) / 2)]);
    middle.push(array[Math.floor(array.length / 2)]);
  }
  return middle;
};

//Test Code

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), 3);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), "3");