/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = (address) => {
  return address.replace(/\./g, '[.]');
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = defangIPaddr('1.1.1.1');
  const expected = '1[.]1[.]1[.]1';
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = defangIPaddr('255.100.50.0');
  const expected = '255[.]100[.]50[.]0';
  if (actual === expected) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
