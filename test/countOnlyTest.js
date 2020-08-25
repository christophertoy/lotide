const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it ("should return 1 for Jason", () => {
    const input = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(input, {"Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result["Jason"], 1);
  });
  it ("should return undefined for Karima", () => {
    const input = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(input, {"Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result["Karima"], undefined);
  });
  it ("should return 2 for Fang", () => {
    const input = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result = countOnly(input, {"Jason": true, "Karima": true, "Fang": true });
    assert.strictEqual(result["Fang"], 2);
  });
});
