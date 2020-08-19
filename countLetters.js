const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Pased: ${actual} === ${expected} ✅`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected} ❌`);
  }
};

const countLetters = function(str){
  const results = {}
  for (const letter of str){
      if (letter === " "){
        delete results[letter];
      } else if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }
return results;

};

console.log(countLetters("hello     world"));