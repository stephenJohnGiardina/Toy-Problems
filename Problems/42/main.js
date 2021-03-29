/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
  const heights = {};
  for (let i = 0; i < height.length - 1; i += 1) {
    for (let j = i + 1; j < height.length; j += 1) {
      for (let k = i + 1; k < j; k += 1) {
        if (height[k] < height[i] && height[k] < height[j]) {
          const min = Math.min(height[i], height[j]);
          if (heights[k] === undefined) {
            heights[k] = min - height[k];
          } else if (heights[k] < min - height[k]) {
            heights[k] = min - height[k];
          }
        }
      }
      if (height[i] <= height[j]) {
        i = j;
      }
    }
  }
  let result = 0;
  const values = Object.values(heights);
  for (let i = 0; i < values.length; i += 1) {
    result += values[i];
  }
  return result;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
  const expected = 6;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = trap([1, 0, 1, 0, 1]);
  const expected = 2;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = trap([0, 5, 6, 4, 6, 1, 0, 0, 2, 7]);
  const expected = 23;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test3());
