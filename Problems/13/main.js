/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  if (typeof s !== 'string') {
    return null;
  }
  let result = 0;
  let prev = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (DIGIT_VALUES[prev] < DIGIT_VALUES[s[i]]) {
      result -= 2 * DIGIT_VALUES[prev];
    }
    result += DIGIT_VALUES[s[i]];
    prev = s[i];
  }
  return result;
};

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = romanToInt('III');
  const expected = 3;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = romanToInt('IV');
  const expected = 4;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = romanToInt('IX');
  const expected = 9;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = romanToInt('LVIII');
  const expected = 58;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = romanToInt('MCMXCIV');
  const expected = 1994;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());
