/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
      if (i === j) {
        continue;
      } else if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
  return [];
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = JSON.stringify(twoSum([2, 7, 11, 15], 9));
  const expected = JSON.stringify([1, 2]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = JSON.stringify(twoSum([3, 3], 6));
  const expected = JSON.stringify([1, 2]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
