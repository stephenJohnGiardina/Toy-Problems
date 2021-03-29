/**
 * @param {string} str
 * @return {string}
 */
const toLowerCase = (str) => {
  return str.toLowerCase();
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = toLowerCase('Hello');
  const expected = 'hello';
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = toLowerCase('here');
  const expected = 'here';
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = toLowerCase('LOVELY');
  const expected = 'lovely';
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test3());
