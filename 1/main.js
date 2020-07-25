/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// TEST SUITE

// TEST 1

function test1() {
  if (JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([0, 1])) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  if (JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([0, 1])) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test2());