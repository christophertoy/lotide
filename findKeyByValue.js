const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Pased: ${actual} === ${expected} ✅`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};


const findKeyByValue = function(object, value) {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};


//TEST Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const superHeroes = {
  DC: "Superman",
  Marvel: "Ironman",
  Anime: "Deku"
};

assertEqual(findKeyByValue(superHeroes, "Superman"), "DC");
assertEqual(findKeyByValue(superHeroes, "Deku"), undefined);
assertEqual(findKeyByValue(superHeroes, "Batman"), "DC");
