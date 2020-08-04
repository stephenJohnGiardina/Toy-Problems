var fourSum = function(nums, target) {
  nums = nums.sort((a,b) => a - b);
  let result = new Set();
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let l = k + 1; l < nums.length; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            result.add(JSON.stringify([nums[i], nums[j], nums[k], nums[l]]))
          }
        }
      }
    }
  }
  result = Array.from(result);
  result = result.map(string => JSON.parse(string));
  return result;
};


// TEST SUITE

// TEST 1

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))

// TEST 2

console.log(fourSum([-3,-2,-1,0,0,1,2,3], 0))