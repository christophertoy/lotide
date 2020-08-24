const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = (array) => {
  let middleElements = [];
  if (array.length <= 2) {
    return middleElements;
  } else if (array.length % 2 !== 0) {
    middleElements.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    middleElements.push(array[Math.floor((array.length - 1) / 2)]);
    middleElements.push(array[Math.floor(array.length / 2)]);
  }
  return middleElements;
};

module.exports = middle;