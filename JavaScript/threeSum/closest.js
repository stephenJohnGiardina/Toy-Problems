// Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.


// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

var threeSumClosest = function(nums, target) {
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
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

console.log(threeSumClosest([-1,2,1,-4], 1))

// TEST 2

console.log(threeSumClosest([-1,2,1,-4], 1))