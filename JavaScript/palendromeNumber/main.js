// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

var isPalendrome = function(x) {
  if (x < 0) return false;
  x+='';
  if (x.length < 2) return true;
  if (x.length % 2 !== 0) {
    x = x.slice(0, Math.floor(x.length / 2)) + x.slice(Math.floor(x.length / 2) + 1);
  }
  while (x.length !== 0) {
    if (x[0] !== x[x.length - 1]) {
      return false;
    } else {
      x = x.substring(1, x.length - 1);
    }
  }
  return true;
}


// TEST SUITE

// TEST 1

console.log(isPalendrome(121));

// TEST 2

console.log(isPalendrome(-121));

// TEST 1

console.log(isPalendrome(10));