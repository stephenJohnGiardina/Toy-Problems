/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  const x = nums1.length;
  const y = nums2.length;
  let start = 0;
  let end = x;
  let partitionX;
  let partitionY;
  while (start <= end) {
    partitionX = Math.floor((start + end) / 2);
    partitionY = Math.floor(((x + y + 1) / 2) - partitionX);
    const maxX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
    const minX = (partitionX === x) ? Infinity : nums1[partitionX];
    const maxY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
    const minY = (partitionY === y) ? Infinity : nums2[partitionY];
    if (maxX < minY && maxY < minX) {
      if ((x + y) % 2 === 0) {
        return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
      }
      return Math.max(maxX, maxY);
    }
    if (maxX > minY) {
      end = partitionX - 1;
    } else if (maxX < minY) {
      start = partitionX + 1;
    } else if ((x + y) % 2 === 0) {
      return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
    } else {
      return Math.max(maxX, maxY);
    }
  }
  return null;
};

// TEST SUITE

// TEST 1

function test1() {
  const actual = findMedianSortedArrays([1, 3], [2]);
  const expected = 2;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = findMedianSortedArrays([1, 2], [3, 4]);
  const expected = 2.5;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const actual = findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]);
  const expected = 11;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const actual = findMedianSortedArrays([23, 26, 31, 35], [3, 5, 7, 9, 11, 16]);
  const expected = 13.5;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const actual = findMedianSortedArrays([0, 0], [0, 0]);
  const expected = 0;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test5());

// TEST 6

function test6() {
  const actual = findMedianSortedArrays([1, 2], [1, 1]);
  const expected = 1;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test6());
