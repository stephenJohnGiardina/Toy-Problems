/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
  if (numRows === 1) {
    return s;
  }
  const distance = (2 * (numRows - 1));
  let result = '';
  const zigs = [];
  let currentZig = [];
  for (let i = 0; i < s.length; i += 1) {
    if (i % distance === 0) {
      result += s[i];
      zigs.push(currentZig);
      currentZig = [];
    } else {
      currentZig.push(s[i]);
    }
  }
  while (currentZig.length !== distance - 1) {
    currentZig.push(0);
  }
  zigs.push(currentZig);
  zigs.shift();
  for (let i = 0; i < numRows - 2; i += 1) {
    for (let j = 0; j < zigs.length; j += 1) {
      const left = zigs[j][0];
      const right = zigs[j][zigs[j].length - 1];
      zigs[j].shift();
      zigs[j].pop();
      if (typeof left === 'string') {
        result += left;
      }
      if (typeof right === 'string') {
        result += right;
      }
    }
  }
  for (let i = 0; i < zigs.length; i += 1) {
    if (typeof zigs[i][0] === 'string') {
      result += zigs[i][0];
    }
  }
  return result;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = convert('PAYPALISHIRING', 3);
  const expected = 'PAHNAPLSIIGYIR';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = convert('PAYPALISHIRING', 4);
  const expected = 'PINALSIGYAHRPI';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = convert('', 1);
  const expected = '';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());
