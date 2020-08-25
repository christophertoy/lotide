const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeybyValue ', () => {

  it('should return "drama" for "The Wire" ', () => {
    const input = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };

    assert.deepEqual(findKeyByValue(input, "The Wire"), "drama");
  });
  it('should return undefined for "That 70s Show"', () => {
    const input = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.deepEqual(findKeyByValue(input, "That 70s Show"), undefined);
  });
});


// //TEST Code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const superHeroes = {
//   DC: "Superman",
//   Marvel: "Ironman",
//   Anime: "Deku"
// };

// assertEqual(findKeyByValue(superHeroes, "Superman"), "DC");
// assertEqual(findKeyByValue(superHeroes, "Deku"), undefined);
// assertEqual(findKeyByValue(superHeroes, "Batman"), "DC");