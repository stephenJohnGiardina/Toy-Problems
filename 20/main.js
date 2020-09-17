/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  if (s[0] === '(') {
    return solveParens(s.substring(1));
  } if (s[0] === '{') {
    return solveCurly(s.substring(1));
  } if (s[0] === '[') {
    return solveBracket(s.substring(1));
  }
  return false;
};

const solveParens = (string) => {
  if (string[0] === '}') {
    return false;
  } if (string[0] === ']') {
    return false;
  } if (string[0] === ')') {
    return true;
  } if (string[0] === '(') {
    return solveParens(string.substring(1));
  } if (string[0] === '{') {
    return solveCurly(string.substring(1));
  } if (string[0] === '[') {
    return solveBracket(string.substring(1));
  }
  return false;
};

const solveCurly = (string) => {
  if (string[0] === '}') {
    return true;
  } if (string[0] === ']') {
    return false;
  } if (string[0] === ')') {
    return false;
  } if (string[0] === '(') {
    return solveParens(string.substring(1));
  } if (string[0] === '{') {
    return solveCurly(string.substring(1));
  } if (string[0] === '[') {
    return solveBracket(string.substring(1));
  }
  return false;
};

const solveBracket = (string) => {
  if (string[0] === '}') {
    return false;
  } if (string[0] === ']') {
    return true;
  } if (string[0] === ')') {
    return false;
  } if (string[0] === '(') {
    return solveParens(string.substring(1));
  } if (string[0] === '{') {
    return solveCurly(string.substring(1));
  } if (string[0] === '[') {
    return solveBracket(string.substring(1));
  }
  return false;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = isValid('()');
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = isValid('()[]{}');
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = isValid('(]');
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = isValid('([)]');
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = isValid('{[]}');
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());

// TEST 6

function test6() {
  const actual = isValid('[');
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test6());

// TEST 7

function test7() {
  const actual = isValid('(){}}{');
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test7());
