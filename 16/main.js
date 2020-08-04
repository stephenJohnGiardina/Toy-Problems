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