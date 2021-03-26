/**
 * @param {number} x
 * @return {boolean}
 */
const isPalendrome = (x) => {
  if (x < 0) return false;
  let string = x.toString();
  if (string.length < 2) return true;
  if (string.length % 2 !== 0) {
    string = string
      .slice(0, Math.floor(string.length / 2)) + string.slice(Math.floor(string.length / 2) + 1);
  }
  while (string.length !== 0) {
    if (string[0] !== string[string.length - 1]) {
      return false;
    }
    string = string.substring(1, string.length - 1);
  }
  return true;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = isPalendrome(121);
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = isPalendrome(-121);
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = isPalendrome(10);
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());
