/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {

};

// TEST SUITE

// TEST 1

function test1() {
  const actual = JSON.stringify(combinationSum([2, 3, 6, 7], 7));
  const expected = JSON.stringify([
    [7],
    [2, 2, 3],
  ]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = JSON.stringify(combinationSum([2, 3, 5], 8));
  const expected = JSON.stringify([
    [2, 2, 2, 2],
    [2, 3, 3],
    [3, 5],
  ]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
