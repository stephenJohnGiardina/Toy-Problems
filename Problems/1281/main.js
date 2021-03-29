/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = (n) => {
  const string = n.toString();
  let product = 1;
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    product *= Number.parseInt(string[i], 10);
    sum += Number.parseInt(string[i], 10);
  }
  return product - sum;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = subtractProductAndSum(234);
  const expected = 15;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = subtractProductAndSum(4421);
  const expected = 21;
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
