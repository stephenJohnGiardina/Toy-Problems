/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  // This function uses Manacher's Algorithm
  if (typeof s !== 'string') return null;
  if (s.length < 2) return s;
  const string = getModifiedString(s);
  const P = new Array(string.length).fill(0);
  let center = 0;
  let rightBoundary = 0;
  for (let i = 0; i < string.length; i += 1) {
    const mirrorIndex = center - (i - center);
    if (i < rightBoundary) P[i] = Math.min(rightBoundary - i, P[mirrorIndex]);
    let right = i + (P[i] + 1);
    let left = i - (P[i] + 1);
    while (right < string.length && left >= 0 && string[left] === string[right]) {
      P[i] += 1;
      right += 1;
      left -= 1;
    }
    if (i + P[i] > rightBoundary) {
      center = i;
      rightBoundary = i + P[i];
    }
  }
  const leng = Math.max(...P);
  const index = P.indexOf(leng);
  return string.substring(index - leng + 1, index + leng).split('|').join('');
};

const getModifiedString = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += `|${string[i]}`;
  }
  return `${result}|`;
};

/**
const longestPalindromeBruteForce = (s) => {
  // This function uses the sliding window technique
  if (s.length < 2) return s;
  let end = 0;
  const allSubstrings = [];
  for (let i = 0; i < s.length; i += 1) {
    for (let j = end; j < s.length; j += 1) {
      allSubstrings.push(s.substring(i, j + 1));
    }
    end += 1;
  }
  return allSubstrings
    .filter((str) => { return isPalendrome(str); })
    .reduce((accum, str) => { return str.length > accum.length ? str : accum; }, '');
};

const isPalendrome = (s) => {
  if (s.length < 2) return true;
  let string;
  if (s.length % 2 !== 0) {
    string = s.slice(0, Math.floor(s.length / 2))
    + s.slice(Math.floor(s.length / 2) + 1);
  }
  while (string.length !== 0) {
    if (string[0] !== string[string.length - 1]) {
      return false;
    }
    string = string.substring(1, string.length - 1);
  }
  return true;
};
*/

// TEST SUITE

// TEST 1

function test1() {
  const actual = longestPalindrome('babad');
  const expected = 'bab';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = longestPalindrome('cbbd');
  const expected = 'bb';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
