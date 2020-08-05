/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const string = num.toString();
  let result = '';
  let power = string.length - 1;
  for (let i = 0; i < string.length; i += 1) {
    result += DIGIT_VALUES[Number.parseInt(string[i], 10) * (10 ** power)];
    power -= 1;
  }
  return result;
};

const DIGIT_VALUES = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM',
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = intToRoman(3);
  const expected = 'III';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = intToRoman(4);
  const expected = 'IV';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = intToRoman(9);
  const expected = 'IX';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = intToRoman(58);
  const expected = 'LVIII';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = intToRoman(1994);
  const expected = 'MCMXCIV';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());

// TEST 6

function test6() {
  const actual = intToRoman(10);
  const expected = 'X';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test6());

// TEST 7

function test7() {
  const actual = intToRoman(100);
  const expected = 'C';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test7());
