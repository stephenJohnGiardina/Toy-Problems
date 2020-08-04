var DIGIT_VALUES = {
  0: '',
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};

var intToRoman = function(num) {
  let string = num + '';
  let result = '';
  let power = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    result = result + DIGIT_VALUES[Number.parseInt(string[i]) * Math.pow(10, power)];
    power--;
  }
  return result;
}


// TEST SUITE

// TEST 1

console.log(intToRoman(3));

// TEST 2

console.log(intToRoman(4));

// TEST 3

console.log(intToRoman(9));

// TEST 4

console.log(intToRoman(58));

// TEST 5

console.log(intToRoman(1994));

// TEST 6

console.log(intToRoman(10));

// TEST 7

console.log(intToRoman(100));