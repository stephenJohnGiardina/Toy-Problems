function reverse(x) {
  let result;
  if (x < 0) {
    result = Number.parseInt('-' + (x + '').substring(1).split('').reverse().join(''));
  } else {
    result = Number.parseInt((x + '').split('').reverse().join(''));
  }
  if (result > Math.pow(2, 31) - 1 || result < - Math.pow(2, 31)) {
    return 0;
  }
  return result;
}


// TEST SUITE

// TEST 1

console.log(reverse(123));

// TEST 2

console.log(reverse(-123));

// TEST 3

console.log(reverse(432));

// TEST 4

console.log(reverse(987));

// TEST 5

console.log(reverse(1534236469));