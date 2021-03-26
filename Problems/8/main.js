/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  let currentChar;
  let result = '';
  let haveHadNumber = false;
  let gotSign = false;
  for (let i = 0; i < str.length; i += 1) {
    currentChar = str[i];
    if (currentChar === ' ' && !haveHadNumber && !gotSign) {
      continue;
    } else if ((currentChar === '-' || currentChar === '+') && !haveHadNumber) {
      if (!gotSign) {
        result += currentChar;
        gotSign = true;
      } else {
        break;
      }
    } else if (!isNaN(Number.parseInt(currentChar, 10))) {
      haveHadNumber = true;
      result += currentChar;
    } else if (isNaN(Number.parseInt(currentChar, 10))) {
      if (!haveHadNumber) {
        return 0;
      }
      break;
    }
  }
  if (!haveHadNumber) {
    return 0;
  }
  result = Number.parseInt(result, 10);
  if (result > (2 ** 31) - 1) {
    return (2 ** 31) - 1;
  }
  if (result < -(2 ** 31)) {
    return -(2 ** 31);
  }
  return result;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = myAtoi('42');
  const expected = 42;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = myAtoi('   -42');
  const expected = -42;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = myAtoi('4193 with words');
  const expected = 4193;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = myAtoi('words and 987');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = myAtoi('-91283472332');
  const expected = -2147483648;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());

// TEST 6

function test6() {
  const actual = myAtoi('');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test6());

// TEST 7

function test7() {
  const actual = myAtoi('-');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test7());

// TEST 8

function test8() {
  const actual = myAtoi('+1');
  const expected = 1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test8());

// TEST 9

function test9() {
  const actual = myAtoi('+-2');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test9());

// TEST 10

function test10() {
  const actual = myAtoi('   +0 123');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test10());

// TEST 11

function test11() {
  const actual = myAtoi('0-1');
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test11());
