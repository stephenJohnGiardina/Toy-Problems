/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = removeElement([3, 2, 2, 3], 3);
  const expected = 2;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
  const expected = 5;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
