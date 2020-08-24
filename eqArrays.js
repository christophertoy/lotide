const assertEqual = require('./assertEqual');

const eqArrays = (arrayOne, arrayTwo) => {
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

module.exports = eqArrays;
