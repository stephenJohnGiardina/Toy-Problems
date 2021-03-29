/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i -= 1;
    }
  }
  return nums.length;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = removeDuplicates([1, 1, 2]);
  const expected = 2;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
  const expected = 5;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
