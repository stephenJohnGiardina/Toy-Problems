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