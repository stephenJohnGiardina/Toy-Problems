// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

// Note:

// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:

// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:

// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
// Example 5:

// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false

var isMatch = function(s, p) {
  let i = 0;
  let j = 0;
  let prev;
  while(j < p.length) {
    if (p[j] == '.') {
      if (p[j + 1] === '*') {
        return true;
      }
      i++; j++;
    } else if (p[j] == '*') {
      console.log(s[i], prev)
      while (s[i] === prev) {
        i++;
      }
      i++;
      j++;
    } else {
      if (s[i] === p[j]) {
        i++; j++;
      }
      else {
        return false;
      }
    }
    prev = p[j - 1];
  }
  if (i > s.length - 1 && j > p.length - 1) return true;
}

// TEST SUITE

// TEST 1

console.log(isMatch('aa', 'a'));

// TEST 2

console.log(isMatch('aa', 'a*'));

// TEST 3

console.log(isMatch('ab', '.*'));

// TEST 4

console.log(isMatch('aab', 'c*a*b'));

// TEST 5

console.log(isMatch('mississippi', 'mis*is*p*.'));