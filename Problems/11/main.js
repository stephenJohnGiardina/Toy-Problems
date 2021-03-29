/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let result = 0;
  let a = 0;
  let b = height.length - 1;
  while (a < b) {
    if (height[a] < height[b]) {
      result = Math.max(result, height[a] * (b - a));
      a += 1;
    } else {
      result = Math.max(result, height[b] * (b - a));
      b -= 1;
    }
  }
  return result;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = maxArea([3, 2, 12, 4]);
  const expected = 9;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
  const expected = 49;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
