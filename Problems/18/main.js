/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  const numbers = nums.sort((a, b) => { return a - b; });
  let result = new Set();
  for (let i = 0; i < numbers.length - 3; i += 1) {
    for (let j = i + 1; j < numbers.length - 2; j += 1) {
      for (let k = j + 1; k < numbers.length - 1; k += 1) {
        for (let l = k + 1; l < numbers.length; l += 1) {
          if (numbers[i] + numbers[j] + numbers[k] + numbers[l] === target) {
            result.add(JSON.stringify([numbers[i], numbers[j], numbers[k], numbers[l]]));
          }
        }
      }
    }
  }
  result = Array.from(result);
  result = result.map((string) => { return JSON.parse(string); });
  return result;
};

// TEST SUITE

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// TEST 1

function test1() {
  const actual = fourSum([1, 0, -1, 0, -2, 2], 0);
  const expected = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]];
  if (arraysEqual(JSON.stringify(actual), JSON.stringify(expected))) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);
  const expected = [
    [-3, -2, 2, 3],
    [-3, -1, 1, 3],
    [-3, 0, 0, 3],
    [-3, 0, 1, 2],
    [-2, -1, 0, 3],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ];
  if (arraysEqual(JSON.stringify(actual), JSON.stringify(expected))) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
