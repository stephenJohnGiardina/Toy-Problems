// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:

// Although the above answer is in lexicographical order, your answer could be in any order you want.


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


