/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  return height;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  const expected = 6;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = trap(1, 0, 1);
  const expected = 1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
