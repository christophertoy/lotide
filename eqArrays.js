const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Pased: ${actual} === ${expected} ✅`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

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
    

