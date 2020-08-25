const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it ('should return true if objects are equal', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });
  it ('should return true if objects are equal', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { c: "1", d: ["2", 3] };
    assert.deepEqual(eqObjects(cd, dc), true);
  });
  it ('should return false if objects are not equal', () => {
    const cd = { c: "1", d: ["2", 3] };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(cd, abc), false);
  });
});
