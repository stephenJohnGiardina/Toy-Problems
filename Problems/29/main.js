/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = (dividend, divisor) => {
  // In the case that divisor === -0
  if (divisor === 0) divisor = 0;
  // A result variable is declared.
  let result = 0;
  /**
   * Both numbers are made positive and a negative boolean is created that will
   * determine whether the result will be positive or negative.
   */
  let negative = false;
  if (dividend < 0) {
    negative = !negative;
    dividend = Number.parseInt((dividend.toString()).substring(1), 10);
  }
  if (divisor < 0) {
    negative = !negative;
    divisor = Number.parseInt((divisor.toString()).substring(1), 10);
  }
  // Finds the result using a long division function.
  if (divisor === 0) {
    if (negative) {
      return -Infinity;
    }
    return Infinity;
  }
  result = longDivision(dividend, divisor);
  // Makes the number negative if is supposed to be.
  if (negative) {
    result = Number.parseInt(`-${result}`, 10);
  }
  // Makes sure the result is within a specific range.
  if (result > 2147483647) {
    result = 2147483647;
  } else if (result < -2147483648) {
    result = -2147483648;
  }
  // The result is returned.
  return result;
};

function longDivision(dividend, divisor) {
  /**
   * This is a long division function. This function only works for positive
   * numbers. To perform a division operation with a negative divisor, a
   * negative dividend or both a negative divisor or dividend the divide function
   * is better.
   *
   * NOTE:
   *
   * The divide function uses this function.
   *
   * This function works exactly how you would think a long division function would work.
   * It incorporates a function called find product to find the next digit of the result
   * and the next minuend in the operation.
   */
  if (dividend < divisor) return 0;
  let dividendString = (dividend.toString());
  let result = '';
  let currentDividend = dividendString[0];
  dividendString = dividendString.slice(1);
  while (divisor > Number.parseInt(currentDividend, 10)) {
    currentDividend += dividendString[0];
    dividendString = dividendString.slice(1);
  }
  while (dividendString.length !== 0) {
    const [product, minuend] = findProduct(divisor, Number.parseInt(currentDividend, 10));
    result += minuend;
    const difference = Number.parseInt(currentDividend, 10) - product;
    currentDividend = difference + dividendString[0];
    dividendString = dividendString.slice(1);
  }
  const minuend = findProduct(divisor, Number.parseInt(currentDividend, 10))[1];
  result += minuend;
  return Number.parseInt(result, 10);
}

function findProduct(divisor, dividend) {
  /**
   * This function takes in a divisor and a dividend and returns a tuple
   * of the greatest product and the greatest factor of the divisor.
   *
   * For example:
   *
   * divisor = 3
   * dividend = 33
   * findProduct(divisor, dividend) === [33, 11]
   *
   * This is because the largest number that can be multiplied by 3 and
   * have the result still be less than or equal to 33 is 11. The function returns
   * [33, 11] because 3 * 11 = 33.
   *
   * No multiplication or division is used in this function. Only addition and
   * subtraction are used.
   *
   * NOTE:
   *
   * The way this function is used the longDivision function minuend will never be
   * greater than 9.
   */
  let minuend = 0;
  let product = 0;
  while (product <= dividend) {
    minuend += 1;
    product += divisor;
  }
  return [product - divisor, minuend - 1];
}

// TEST SUITE

// TEST 1

function test1() {
  const actual = divide(10, 3);
  const expected = 3;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = divide(7, -3);
  const expected = -2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = divide(-7, 3);
  const expected = -2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = divide(-7, -3);
  const expected = 2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = divide(1, 1);
  const expected = 1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());

// TEST 6

function test6() {
  const actual = divide(-2147483648, -1);
  const expected = 2147483647;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test6());

// TEST 7

function test7() {
  let result = 0;
  for (let i = 0; i < 100000; i += 1) {
    const dividend = Math.trunc((Math.random() - 0.5) * 10000);
    const divisor = Math.trunc((Math.random() - 0.5) * 10000);
    // Had to convert both dividend and divisor to strings to get rid of -0
    if (divide(dividend, divisor) === Math.trunc((dividend.toString()) / (divisor.toString()))) {
      result += 1;
    } else {
      console.log(dividend, divisor, divide(dividend, divisor), Math.trunc(dividend / divisor));
    }
  }
  const data = `Passed ${result}/100000 randomly generated tests.`;
  return data;
}

console.log(test7());
