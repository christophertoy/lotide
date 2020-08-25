const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArray', () => {
  it ('should return true if arrays are equal', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it ('should return false if arrays are not equal', () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 1, 1]), false);
  });
});

