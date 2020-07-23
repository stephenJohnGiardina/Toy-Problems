// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

function reverse(x) {
  let result;
  if (x < 0) {
    result = Number.parseInt('-' + (x + '').substring(1).split('').reverse().join(''));
  } else {
    result = Number.parseInt((x + '').split('').reverse().join(''));
  }
  if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31)) {
    return 0;
  }
  return result;
}


// TEST SUITE

// TEST 1

console.log(reverse(123));

// TEST 2

console.log(reverse(-123));

// TEST 3

console.log(reverse(432));

// TEST 4

console.log(reverse(987));

// TEST 5

console.log(reverse(1534236469));