/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const getWinner = (arr, k) => {
  let currentWinner;
  for (let i = 0; i < k; i += 1) {
    if (i > arr.length) {
      break;
    }
    if (arr[0] < arr[1]) {
      if (arr[1] !== currentWinner) {
        currentWinner = arr[1];
        i = 0;
      }
      arr.push(arr.splice(0, 1)[0]);
    } else if (arr[0] > arr[1]) {
      if (arr[0] !== currentWinner) {
        currentWinner = arr[0];
        i = 0;
      }
      arr.push(arr.splice(1, 1)[0]);
    }
  }
  return currentWinner;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = getWinner([2, 1, 3, 5, 4, 6, 7], 2);
  const expected = 5;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = getWinner([3, 2, 1], 10);
  const expected = 3;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7);
  const expected = 9;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000);
  const expected = 99;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test4());
