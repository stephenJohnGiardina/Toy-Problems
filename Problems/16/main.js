/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i += 1) {
    for (let j = i + 1; j < nums.length - 1; j += 1) {
      for (let k = j + 1; k < nums.length; k += 1) {
        if (Math.abs(target - (nums[i] + nums[j] + nums[k])) < Math.abs(target - result)) {
          result = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }
  return result;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = threeSumClosest([-1, 2, 1, -4], 1);
  const expected = 2;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());
