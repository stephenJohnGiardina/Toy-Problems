/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let result;
  if (x < 0) {
    result = Number.parseInt(`-${x
      .toString()
      .substring(1)
      .split('')
      .reverse()
      .join('')}`,
    10);
  } else {
    result = Number.parseInt((`${x}`)
      .split('')
      .reverse()
      .join(''),
    10);
  }
  if (result > (2 ** 31) - 1 || result < -(2 ** 31)) {
    return 0;
  }
  return result;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = reverse(123);
  const expected = 321;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = reverse(-123);
  const expected = -321;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = reverse(432);
  const expected = 234;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = reverse(987);
  const expected = 789;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = reverse(1534236469);
  const expected = 0;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test5());
