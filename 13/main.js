var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var romanToInt = function(s) {
  if (typeof s !== 'string') {
    return null;
  }
  let result = 0;
  let prev = 0;
  for (let i = 0 ; i < s.length; i++) {
    if (DIGIT_VALUES[prev] < DIGIT_VALUES[s[i]]) {
      result -= 2 * DIGIT_VALUES[prev];
    }
    result += DIGIT_VALUES[s[i]];
    prev = s[i];
  }
  return result;
};


// TEST SUITE

// TEST 1

console.log(romanToInt("III"))

// TEST 2

console.log(romanToInt("IV"))

// TEST 3

console.log(romanToInt("IX"))

// TEST 4

console.log(romanToInt("LVIII"))

// TEST 5

console.log(romanToInt("MCMXCIV"))