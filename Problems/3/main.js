/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let maxLen = 0;
  let curr = 0;
  const hash = {};
  if (s.length < 2) {
    return s.length;
  }
  for (let i = 0; i < s.length; i += 1) {
    if (hash[s[i]] == null) {
      curr += 1;
    } else {
      curr = Math.min(i - hash[s[i]], curr + 1);
    }
    maxLen = Math.max(maxLen, curr);
    hash[s[i]] = i; // save the index
  }
  return maxLen;
};

/**
const lengthOfLongestSubstringSlidingWondow = (s) => {
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let aPosition = 0;
  let bPosition = 0;
  let result = 0;
  while (aPosition !== s.length - 1) {
    const obj = {};
    while (!Object.values(obj).includes(2)) {
      const substringLength = s.substring(aPosition, bPosition).length;
      if (substringLength > result) {
        result = substringLength;
      }
      if (obj[s[bPosition]] === undefined) {
        obj[s[bPosition]] = 1;
      } else {
        obj[s[bPosition]] += 1;
      }
      bPosition += 1;
    }
    aPosition += 1;
    bPosition = aPosition;
  }
  return result;
};
 */

/**
const lengthOfLongestSubstringRecursiveSolution = (s) => {
  if (s.length === 0) return 0;
  const arr = [];
  const helper = (string) => {
    arr.push(string);
    if (string.length !== 1) {
      const left = string.substring(1);
      if (!arr.includes(left)) {
        helper(left);
      }
      const right = string.substring(0, string.length - 1);
      if (!arr.includes(right)) {
        helper(right);
      }
    }
  };
  helper(s);
  return arr.filter((string) => {
    const obj = {};
    for (let i = 0; i < string.length; i += 1) {
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
    }
    return accumulator;
  }, 0);
};
*/

// TEST SUITE

// TEST 1

function test1() {
  if (lengthOfLongestSubstring('') === 0) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  if (lengthOfLongestSubstring(' ') === 1) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  if (lengthOfLongestSubstring('abcb') === 3) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  if (lengthOfLongestSubstring('suqqjkuuxfeinpgjucmoc') === 12) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  if (lengthOfLongestSubstring('mrjkdfwfsfjoblbhtjcpdbjdqkvevshhjssnzosstdgwqhelqibumkzcwujsnsbyktlkkgeflkectkpjuqfgdgjbduvqm') === 12) {
    return '✔';
  }
  return 'X';
}

console.log(test5());
