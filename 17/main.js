let phoneNumberLetters = {
  '2': "abc",
  '3': "def",
  '4': "ghi",
  '5': "jkl",
  '6': "mno",
  '7': "pqrs",
  '8': "tuv",
  '9': "wxyz"
}

var letterCombinations = function(digits, string = '') {
  let result = [];
  if (digits.length === 0) {
    if (string !== '') {
      result.push(string);
    }
  } else {
    for (let i = 0; i < phoneNumberLetters[digits[0]].length; i++) {
      result = result.concat(letterCombinations(digits.substring(1), string + phoneNumberLetters[digits[0]][i]));
    }
  }
  return result;
};


// TEST SUITE

// TEST 1

console.log(letterCombinations("23"))

// TEST 2

console.log(letterCombinations(""))


