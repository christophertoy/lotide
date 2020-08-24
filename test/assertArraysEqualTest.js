const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE

assertArraysEqual([1, "Hi", 2], [2, "Hi", 1]);
assertArraysEqual(["hello", "world", 123], ["hello", "world", 123]);
assertArraysEqual([], []);