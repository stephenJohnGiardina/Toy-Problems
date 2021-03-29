/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  allCombinations = find_combinations(n)

  validCombinations = [];
  for (i = 0; i < allCombinations.length; i++) {
    let currentParentheses = allCombinations[i]
    if (isValid(currentParentheses) && validCombinations.indexOf(currentParentheses === -1)) {
      validCombinations.push(currentParentheses);
    }
  }
  validCombinations = validCombinations.sort();
  return validCombinations;
};

const find_combinations = (num, string = "", options = null) => {
  let result = [];
  if (options === null) {
    options = [];
    for (let i = 0; i < num; i++) {
      options.push("(", ")");
      // options.push(i);
    }
  }
  if (options.length === 0) {
    result.push(string);
    return result;
  }
  for (let i = 0; i < options.length; i++) {
    result = result.concat(
      find_combinations(
        num - 1,
        string + options[i],
        options.slice(0, i).concat(options.slice(i + 1))
      )
    );
  }
  return Array.from(new Set(result));
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

const arraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// TEST 1

function test1() {
  const actual = generateParenthesis(3);
  const expected = ["((()))", "(()())", "(())()", "()(())", "()()()"];
  if (arraysEqual(actual, expected)) {
    return "$$$$$";
  }
  return "X";
}

console.log(test1());

// TEST 2

function test2() {
  const actual = generateParenthesis(1);
  const expected = ["()"];
  if (arraysEqual(actual, expected)) {
    return "$$$$$";
  }
  return "X";
}

console.log(test2());
