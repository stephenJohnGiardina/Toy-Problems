/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
  if (haystack === '' && needle === '') return 0;
  for (let i = 0; i < haystack.length; i += 1) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = strStr('hello', 'll');
  const expected = 2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = strStr('aaaaa', 'bba');
  const expected = -1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = strStr('', '');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = strStr('a', 'a');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());
