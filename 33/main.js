/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (nums.length === 0) return -1;
  let midpoint = 0;
  let max;
  let min;
  while (nums[midpoint] < nums[midpoint + 1]) {
    midpoint += 1;
  }
  if (nums[midpoint] === target) return midpoint;
  if (target < nums[0]) {
    max = nums.length - 1;
    min = midpoint + 1;
  } else {
    max = midpoint;
    min = 0;
  }
  midpoint = max - (Math.floor((max - min) / 2) || 1);
  if (midpoint === -1) return -1;
  if (max === min && nums[max] === target) return max;
  while (min !== max) {
    if (min > max) return -1;
    if (nums[midpoint] === target) return midpoint;
    if (nums[midpoint] > target) {
      max = midpoint;
    } else if (nums[midpoint] < target) {
      min = midpoint;
    }
    if (midpoint === max - (Math.floor((max - min) / 2) || 1)) {
      min += 1;
    }
    midpoint = max - (Math.floor((max - min) / 2) || 1);
  }
  if (nums[max] === target) return max;
  return -1;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = search([4, 5, 6, 7, 0, 1, 2], 0);
  const expected = 4;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = search([4, 5, 6, 7, 0, 1, 2], 3);
  const expected = -1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = search([1, 3], 1);
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = search([3, 1], 1);
  const expected = 1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = search([], 5);
  const expected = -1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());

// TEST 6

function test6() {
  const actual = search([1], 2);
  const expected = -1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test6());

// TEST 7

function test7() {
  const actual = search([3, 1], 0);
  const expected = -1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test7());

// TEST 8

function test8() {
  const actual = search([5, 1, 3], 3);
  const expected = 2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test8());

// TEST 9

function test9() {
  const actual = search([1], 0);
  const expected = -1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test9());
