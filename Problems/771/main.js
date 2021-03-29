/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = (J, S) => {
  let count = 0;
  for (let i = 0; i < S.length; i += 1) {
    for (let j = 0; j < J.length; j += 1) {
      if (S[i] === J[j]) count += 1;
    }
  }
  return count;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = numJewelsInStones('aA', 'aAAbbbb');
  const expected = 3;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = numJewelsInStones('z', 'ZZ');
  const expected = 0;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
