/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let parenCount = 0
  let curlyCount = 0
  let bracketCount = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      parenCount++;
    } else if (s[i] === '['){
      bracketCount++
    } else if (s[i] === '{'){
      curlyCount++;
    } else if (s[i] === ')'){
      parenCount--;
    } else if (s[i] === ']'){
      bracketCount--;
    } else if (s[i] === '}'){
      curlyCount--;
    }
    if (parenCount < 0 || bracketCount < 0 || curlyCount < 0){
      return false;
    }
  }
  return true;
};


// TEST SUITE

// TEST 1

console.log(isValid("()"))

// TEST 2

console.log(isValid("()[]{}"))

// TEST 3

console.log(isValid("(]"))

// TEST 4

console.log(isValid("([)]"))

// TEST 5

console.log(isValid("{[]}"))


