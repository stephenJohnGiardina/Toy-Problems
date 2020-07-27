/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
      i--;
    }
  }
  return nums.length;
};

// TEST SUITE

// TEST 1

function test1() {
  if (removeDuplicates([1,1,2]) === 2) return "✔";
  return "X";
}

console.log(test1());

// TEST 2

function test2() {
  if (removeDuplicates([0,0,1,1,1,2,2,3,3,4]) === 5) return "✔";
  return "X";
}

console.log(test2());