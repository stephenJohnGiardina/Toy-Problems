/**
 * Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function(s) {
  let max_len = 0;
  let curr = 0;
  let hash = {};
  if(s.length < 2) {
      return s.length;
  }
  for(let i = 0; i < s.length;  i++) {
      if(hash[s[i]] == null) {
          curr += 1;
      } else {
          curr = Math.min(i - hash[s[i]], curr + 1);
      }
      max_len = Math.max(max_len, curr);
      hash[s[i]] = i; //save the index
  }
  return max_len;
};

var lengthOfLongestSubstringSlidingWondow = function(s) {
  if (s.length === 0) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  }
  let a_position = 0;
  let b_position = 0;
  let result = 0;
  while (a_position !== s.length - 1) {
    let obj = {};
    while (!Object.values(obj).includes(2)) {
      let substringLength = s.substring(a_position, b_position).length;
      if (substringLength > result) {
        result = substringLength;
      }
      if (obj[s[b_position]] === undefined) {
        obj[s[b_position]] = 1;
      } else {
        obj[s[b_position]]++;
      }
      b_position++;
    }
    a_position++;
    b_position = a_position;
  }
  return result;
};

var lengthOfLongestSubstringRecursiveSolution = function(s) {
  if (s.length === 0) return 0;
  let arr = [];
  let helper = (string) => {
    arr.push(string)
    if (string.length === 1) {
      return;
    } else {
      const left = string.substring(1)
      if (!arr.includes(left)) {
        helper(left);
      }
      const right = string.substring(0, string.length - 1);
      if (!arr.includes(right)) {
        helper(right);
      }
    }
  }
  helper(s);
  return arr.filter((string) => {
    let obj = {};
    for (let i = 0; i < string.length; i++) {
      if (obj[string[i]] === undefined) {
        obj[string[i]] = true;
      } else {
        return false;
      }
    }
    return true;
  }).reduce((accumulator, string) => {
    if (string.length > accumulator) {
      return string.length;
    } else {
      return accumulator;
    }
  }, 0);
};

// TEST SUITE


// TEST 1

console.log(lengthOfLongestSubstring(""));

// TEST 2

console.log(lengthOfLongestSubstring(" "));

// TEST 3

console.log(lengthOfLongestSubstring("abcb"));

// TEST 4

console.log(lengthOfLongestSubstring("suqqjkuuxfeinpgjucmoc"));

// TEST 5

console.log(lengthOfLongestSubstring("mrjkdfwfsfjoblbhtjcpdbjdqkvevshhjssnzosstdgwqhelqibumkzcwujsnsbyktlkkgeflkectkpjuqfgdgjbduvqm"));
