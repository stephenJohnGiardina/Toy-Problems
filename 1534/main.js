/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const countGoodTriplets = (arr, a, b, c) => {
  let count = 0;
  for (let i = 0; i < arr.length - 2; i += 1) {
    for (let j = i + 1; j < arr.length - 1; j += 1) {
      for (let k = j + 1; k < arr.length; k += 1) {
        if (Math.abs(arr[i] - arr[j]) <= a
          && Math.abs(arr[j] - arr[k]) <= b
          && Math.abs(arr[i] - arr[k]) <= c) {
          count += 1;
        }
      }
    }
  }
  return count;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3);
  const expected = 4;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1);
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
