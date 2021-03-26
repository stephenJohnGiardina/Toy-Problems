/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = (s, p) => {
  let i = 0;
  let j = 0;
  let prev;
  while (j < p.length) {
    if (p[j] === '.') {
      if (p[j + 1] === '*') {
        return true;
      }
      i += 1;
      j += 1;
    } else if (p[j] === '*') {
      console.log(s[i], prev);
      while (s[i] === prev) {
        i += 1;
      }
      i += 1;
      j += 1;
    } else if (s[i] === p[j]) {
      i += 1;
      j += 1;
    } else {
      return false;
    }
    prev = p[j - 1];
  }
  if (i > s.length - 1 && j > p.length - 1) return true;
  return false;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = isMatch('aa', 'a');
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = isMatch('aa', 'a*');
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = isMatch('ab', '.*');
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = isMatch('aab', 'c*a*b');
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = isMatch('mississippi', 'mis*is*p*.');
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());
