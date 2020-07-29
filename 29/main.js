/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
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
    dividend = Number.parseInt((dividend + '').substring(1))
  }
  if (divisor < 0) {
    negative = !negative;
    divisor = Number.parseInt((divisor + '').substring(1))
  }
  // Finds the result using a long division function.
  if (divisor === 0) {
    if (negative) {
      return -Infinity;
    } else {
      return Infinity;
    }
  } else {
    result = longDivision(dividend, divisor);
  }
  // Makes the number negative if is supposed to be.
  if (negative) {
    result = Number.parseInt('-' + result)
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
  let dividendString = (dividend + '');
  let result = '';
  let currentDividend = dividendString[0];
  dividendString = dividendString.slice(1);
  while (divisor > Number.parseInt(currentDividend)) {
    currentDividend += dividendString[0];
    dividendString = dividendString.slice(1);
  }
  while (dividendString.length !== 0) {
    let [product, minuend] = findProduct(divisor, Number.parseInt(currentDividend));
    result += minuend;
    let difference = Number.parseInt(currentDividend) - product;
    currentDividend = difference + dividendString[0];
    dividendString = dividendString.slice(1);
  }
  let [product, minuend] = findProduct(divisor, Number.parseInt(currentDividend));
  result += minuend;
  return Number.parseInt(result);
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
    minuend++;
    product += divisor;
  }
  return [product - divisor, minuend - 1];
}


// TEST SUITE

// TEST 1

function test1() {
  if (divide(10, 3) === 3) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  if (divide(7, -3) === -2) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test2());

// TEST 3

function test3() {
  if (divide(-7, 3) === -2) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test3());

// TEST 4

function test4() {
  if (divide(-7, -3) === 2) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test4());

// TEST 5

function test5() {
  if (divide(1, 1) === 1) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test5());

// TEST 6

function test6() {
  if (divide(-2147483648, -1) === 2147483647) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test6());

// TEST 7

function test7() {
  let result = 0;
  for (let i = 0; i < 100000; i++) {
    let dividend = Math.trunc((Math.random() - .5) * 10000);
    let divisor = Math.trunc((Math.random() - .5) * 10000);
    // Had to convert both dividend and divisor to strings to get rid of -0
    if (divide(dividend, divisor) === Math.trunc((dividend + '') / (divisor + ''))) {
      result++;
    }
    else {
      console.log(dividend, divisor, divide(dividend, divisor), Math.trunc(dividend / divisor))
    }
  }
  let data = `Passed ${result}/100000 randomly generated tests.`
 return data;
}

console.log(test7());
