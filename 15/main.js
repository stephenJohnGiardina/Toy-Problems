var threeSum = function(nums) {
  nums = nums.sort((a,b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let sum = 0 - nums[i];
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          result.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] > sum) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return result;
};


// TEST SUITE

// TEST 1

console.log(threeSum([-1, 0, 1, 2, -1, -4]))

// TEST 2

console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))