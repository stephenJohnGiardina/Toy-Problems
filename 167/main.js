var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i === j) {
        continue;
      } else if (numbers[i] + numbers[j] === target) {
        return [i + 1, j + 1];
      }
    }
  }
}

// TEST SUITE

console.log(JSON.stringify(twoSum([2, 7, 11, 15], 9)) === JSON.stringify([1, 2]));
console.log(JSON.stringify(twoSum([3, 3], 6)) === JSON.stringify([1, 2]));