// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


var longestPalindrome = function(s) {
  // This function uses Manacher's Algorithm
  if (typeof s !== 'string') return null;
  if (s.length < 2) return s;
  s = getModifiedString(s);
  let P = new Array(s.length).fill(0);
  let center = 0;
  let rightBoundary = 0;
  for (let i = 0; i < s.length; i++) {
    let mirrorIndex = center - (i - center);
    if (i < rightBoundary) P[i] = Math.min(rightBoundary - i, P[mirrorIndex]);
    let right = i + (P[i] + 1);
    let left = i - (P[i] + 1);
    while (right < s.length && left >= 0 && s[left] === s[right]) {
      P[i]++;
      right++;
      left--;
    }
    if (i + P[i] > rightBoundary) {
      center = i;
      rightBoundary = i + P[i];
    }
  }
  const leng = Math.max(...P);
  const index = P.indexOf(leng);
  return s.substring(index - leng + 1, index + leng).split('|').join('');
}

const getModifiedString = (string) => {
  let result = '';
  for (let i  = 0; i < string.length; i++) {
    result+= '|' + string[i];
  }
  return result + '|';
}

var longestPalindromeBruteForce = function(s) {
  // This function uses the sliding window technique
  if (s.length < 2) return s;
  let end = 0;
  let allSubstrings = []
  for (let i = 0; i < s.length; i++) {
    for (let j = end; j < s.length; j++) {
      allSubstrings.push(s.substring(i, j + 1));
    }
    end++;
  }
  return allSubstrings
    .filter(str => isPalendrome(str))
    .reduce((accum, str) => { return str.length > accum.length ? str : accum }, '');
};

isPalendrome = (string) => {
  if (string.length < 2) return true;
  if (string.length % 2 !== 0) {
    string = string.slice(0, Math.floor(string.length / 2)) + string.slice(Math.floor(string.length / 2) + 1);
  }
  while (string.length !== 0) {
    if (string[0] !== string[string.length - 1]) {
      return false;
    } else {
      string = string.substring(1, string.length - 1);
    }
  }
  return true;
}


// TEST SUITE

// TEST 1

console.log(longestPalindrome("babad"));

// TEST 2

console.log(longestPalindrome("cbbd"));