/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i === j) {
        continue;
      } else if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = JSON.stringify(twoSum([2, 7, 11, 15], 9));
  const expected = JSON.stringify([0, 1]);
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = JSON.stringify(twoSum([3, 3], 6));
  const expected = JSON.stringify([0, 1]);
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
