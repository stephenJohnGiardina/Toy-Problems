/**
 * @param {string} s
 * @return {number}
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

function test1() {

  if (lengthOfLongestSubstring("") == 0) {
    return "✔"
  }
  else {
    return "X"
  }
}

console.log(test1())

// TEST 2

function test2() {

  if (lengthOfLongestSubstring(" ") == 1) {
    return "✔"
  }
  else {
    return "X"
  }
}

console.log(test2())

// TEST 3

function test3() {

  if (lengthOfLongestSubstring("abcb") == 3) {
    return "✔"
  }
  else {
    return "X"
  }
}

console.log(test3())

// TEST 4

function test4() {

  if (lengthOfLongestSubstring("suqqjkuuxfeinpgjucmoc") == 12) {
    return "✔"
  }
  else {
    return "X"
  }
}

console.log(test4())

// TEST 5


function test5() {

  if (lengthOfLongestSubstring("mrjkdfwfsfjoblbhtjcpdbjdqkvevshhjssnzosstdgwqhelqibumkzcwujsnsbyktlkkgeflkectkpjuqfgdgjbduvqm") == 12) {
    return "✔"
  }
  else {
    return "X"
  }
}

console.log(test5())
