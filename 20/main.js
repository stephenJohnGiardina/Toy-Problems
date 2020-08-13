/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  let parenCount = 0;
  let curlyCount = 0;
  let bracketCount = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(') {
      parenCount += 1;
    } else if (s[i] === '[') {
      bracketCount += 1;
    } else if (s[i] === '{') {
      curlyCount += 1;
    } else if (s[i] === ')') {
      parenCount -= 1;
    } else if (s[i] === ']') {
      bracketCount -= 1;
    } else if (s[i] === '}') {
      curlyCount -= 1;
    }
    if (parenCount < 0 || bracketCount < 0 || curlyCount < 0) {
      return false;
    }
  }
  return true;
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
