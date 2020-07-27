/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack === '' && needle === '') return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
};


// TEST SUITE

// TEST 1

function test1() {
  if (strStr("hello", "ll") === 2) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  if (strStr("aaaaa", "bba") === -1) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test2());

// TEST 3

function test3() {
  if (strStr("", "") === 0) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test3());

// TEST 4

function test4() {
  if (strStr("a", "a") === 0) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test4());