/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  allCharacters = "";
  for (let i = 0; i < n; i++) {
    allCharacters += "()";
  }
  allCombinations = [];

  validCombinations = [];
  for (i = 0; i < allCharacters.length; i++) {
    if (isValid(allCombinations[i])) {
      validCombinations.push(allCombinations[i]);
    }
  }
  return validCombinations;
};

const findAllCombinations = (characters) => {
  if (!characters.length) {
    return "";
  } else {
  }
};

const isValid = (s) => {
  const stack = [];
  for (let char = 0; char < s.length; char++) {
    if (s[char] === "(" || s[char] === "{" || s[char] === "[") {
      stack.push(s[char]);
    } else if (s[char] === ")") {
      if (stack[stack.length - 1] !== "(") {
        return false;
      } else {
        stack.pop();
      }
    } else if (s[char] === "]") {
      if (stack[stack.length - 1] !== "[") {
        return false;
      } else {
        stack.pop();
      }
    } else if (s[char] === "}") {
      if (stack[stack.length - 1] !== "{") {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = generateParenthesis(3);
  const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
  if (actual === expected) {
    return "✔";
  }
  return "X";
}

console.log(test1());

// TEST 2

function test2() {
  const actual = generateParenthesis(1);
  const expected = ["()"];
  if (actual === expected) {
    return "✔";
  }
  return "X";
}

console.log(test2());
