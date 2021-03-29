/**
 * @param {string} s
 * @return {boolean}
 */
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
  const actual = isValid("()");
  const expected = true;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test1());

// TEST 2

function test2() {
  const actual = isValid("()[]{}");
  const expected = true;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test2());

// TEST 3

function test3() {
  const actual = isValid("(]");
  const expected = false;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test3());

// TEST 4

function test4() {
  const actual = isValid("([)]");
  const expected = false;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test4());

// TEST 5

function test5() {
  const actual = isValid("{[]}");
  const expected = true;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test5());

// TEST 6

function test6() {
  const actual = isValid("[");
  const expected = false;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test6());

// TEST 7

function test7() {
  const actual = isValid("(){}}{");
  const expected = false;
  if (actual === expected) {
    return "$$$$$";
  }
  return "X";
}

console.log(test7());
