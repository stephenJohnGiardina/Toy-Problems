/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};


// TEST SUITE

// TEST 1

function test1() {
  if (removeElement([3,2,2,3], 3) === 2) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  if (removeElement([0,1,2,2,3,0,4,2], 2) === 5) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test2());