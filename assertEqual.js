// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅" + "Assertion Pased: " + actual + " === " + expected + "✅");
  } else if (actual !== expected) {
    console.log("❌" + "Assertion Failed: " + actual + " !== " + expected + "❌");
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("lol", "lol");
assertEqual("Chris", "Raine");
assertEqual(2,4);
assertEqual(9999,9999);