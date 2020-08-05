/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  const numbers = nums.sort((a, b) => { return a - b; });
  const result = [];
  for (let i = 0; i < numbers.length - 2; i += 1) {
    if (i === 0 || (i > 0 && numbers[i] !== numbers[i - 1])) {
      let low = i + 1;
      let high = numbers.length - 1;
      const sum = 0 - numbers[i];
      while (low < high) {
        if (numbers[low] + numbers[high] === sum) {
          result.push([numbers[i], numbers[low], numbers[high]]);
          while (low < high && numbers[low] === numbers[low + 1]) low += 1;
          while (low < high && numbers[high] === numbers[high - 1]) high -= 1;
          low += 1;
          high -= 1;
        } else if (numbers[low] + numbers[high] > sum) {
          high -= 1;
        } else {
          low += 1;
        }
      }
    }
  }
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
  const actual = threeSum([-1, 0, 1, 2, -1, -4]);
  const expected = [[-1, -1, 2], [-1, 0, 1]];
  if (arraysEqual(JSON.stringify(actual), JSON.stringify(expected))) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);
  const expected = [
    [-4, -2, 6],
    [-4, 0, 4],
    [-4, 1, 3],
    [-4, 2, 2],
    [-2, -2, 4],
    [-2, 0, 2],
  ];
  if (arraysEqual(JSON.stringify(actual), JSON.stringify(expected))) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
