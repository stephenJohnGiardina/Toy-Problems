/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i].toString().length % 2 === 0) {
      count += 1;
    }
  }
  return count;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = findNumbers([12, 345, 2, 6, 7896]);
  const expected = 2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = findNumbers([555, 901, 482, 1771]);
  const expected = 1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
