/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {

};

// TEST SUITE

// TEST 1

function test1() {
  const actual = countAndSay(1);
  const expected = '1';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = countAndSay(4);
  const expected = '1211';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
