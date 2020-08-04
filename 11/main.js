var maxArea = function(height) {
  let result = 0;
  let a = 0;
  let b = height.length - 1;
  while (a < b) {
    if (height[a] < height[b]) {
      result = Math.max(result, height[a] * (b - a));
      a++;
    } else {
      result = Math.max(result, height[b] * (b - a));
      b--;
    }
  }
  return result;
}



// TEST SUITE

// TEST 1

console.log(maxArea([3,2,12,4]));

// TEST 2

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
