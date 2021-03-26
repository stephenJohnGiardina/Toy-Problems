/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let current = '1';
  for (let i = 1; i < n; i += 1) {
    const tempArray = [[current[0], 1]];
    for (let j = 1; j < current.length; j += 1) {
      if (current[j] === tempArray[tempArray.length - 1][0]) {
        tempArray[tempArray.length - 1][1] += 1;
      } else {
        tempArray.push([current[j], 1]);
      }
    }
    current = '';
    for (let j = 0; j < tempArray.length; j += 1) {
      current += tempArray[j][1] + tempArray[j][0];
    }
  }
  return current;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = countAndSay(1);
  const expected = '1';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = countAndSay(4);
  const expected = '1211';
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
