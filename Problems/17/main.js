/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits, string = '') => {
  let result = [];
  if (digits.length === 0) {
    if (string !== '') {
      result.push(string);
    }
  } else {
    for (let i = 0; i < phoneNumberLetters[digits[0]].length; i += 1) {
      result = result
        .concat(letterCombinations(digits.substring(1), string + phoneNumberLetters[digits[0]][i]));
    }
  }
  return result;
};

const phoneNumberLetters = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

// TEST SUITE

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// TEST 1

function test1() {
  const actual = letterCombinations('23');
  const expected = [
    'ad', 'ae', 'af',
    'bd', 'be', 'bf',
    'cd', 'ce', 'cf',
  ];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = letterCombinations('');
  const expected = [];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
