var myAtoi = function(str) {
  let currentChar;
  let result = '';
  let haveHadNumber = false;
  let gotSign = false;
  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];
    if (currentChar === ' ' && !haveHadNumber && !gotSign) {
      continue;
    } else if ((currentChar === '-' || currentChar === '+') && !haveHadNumber) {
      if (!gotSign) {
        result+= currentChar;
        gotSign = true;
      } else {
        break;
      }
    } else if (!isNaN(Number.parseInt(currentChar))) {
      haveHadNumber = true
      result+= currentChar
    } else if (isNaN(Number.parseInt(currentChar))) {
      if (!haveHadNumber) {
        return 0;
      } else {
        break;
      }
    }
  }
  if (!haveHadNumber) {
    return 0;
  }
  result = Number.parseInt(result);
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (result < - Math.pow(2, 31)) {
    return - Math.pow(2, 31);
  }
  return result;
}


// TEST SUITE

// TEST 1

console.log(myAtoi('42'));

// TEST 2

console.log(myAtoi('   -42'));

// TEST 3

console.log(myAtoi('4193 with words'));

// TEST 4

console.log(myAtoi('words and 987'));

// TEST 5

console.log(myAtoi('-91283472332'));

// TEST 6

console.log(myAtoi(''));

// TEST 7

console.log(myAtoi('-'));

// TEST 8

console.log(myAtoi('+1'));

// TEST 9

console.log(myAtoi('+-2'));

// TEST 10

console.log(myAtoi('   +0 123'));

// TEST 11

console.log(myAtoi('0-1'));
