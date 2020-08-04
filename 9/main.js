var isPalendrome = function(x) {
  if (x < 0) return false;
  x+='';
  if (x.length < 2) return true;
  if (x.length % 2 !== 0) {
    x = x.slice(0, Math.floor(x.length / 2)) + x.slice(Math.floor(x.length / 2) + 1);
  }
  while (x.length !== 0) {
    if (x[0] !== x[x.length - 1]) {
      return false;
    } else {
      x = x.substring(1, x.length - 1);
    }
  }
  return true;
}


// TEST SUITE

// TEST 1

console.log(isPalendrome(121));

// TEST 2

console.log(isPalendrome(-121));

// TEST 1

console.log(isPalendrome(10));