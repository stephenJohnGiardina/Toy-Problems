/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.
 */

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }
  let x = nums1.length;
  let y = nums2.length;
  let start = 0;
  let end = x;
  let partition_x;
  let partition_y
  while (start <= end) {
    partition_x = Math.floor((start + end) / 2);
    partition_y = Math.floor(((x + y + 1) / 2) - partition_x);
    let max_x = (partition_x === 0) ? -Infinity : nums1[partition_x - 1];
    let min_x = (partition_x === x) ? Infinity : nums1[partition_x];
    let max_y = (partition_y === 0) ? -Infinity : nums2[partition_y - 1];
    let min_y = (partition_y === y) ? Infinity : nums2[partition_y];
    if (max_x < min_y && max_y < min_x) {
      if ((x + y) % 2 === 0) {
        return (Math.max(max_x, max_y) + Math.min(min_x, min_y)) / 2;
      } else {
        return Math.max(max_x, max_y);
      }
    } else if (max_x > min_y) {
      end = partition_x - 1;
    } else if (max_x < min_y) {
      start = partition_x + 1;
    } else {
      if ((x + y) % 2 === 0) {
        return (Math.max(max_x, max_y) + Math.min(min_x, min_y)) / 2;
      } else {
        return Math.max(max_x, max_y);
      }
    }
  }
};


// TEST SUITE


// TEST 1

console.log(findMedianSortedArrays([1, 3], [2]));

// TEST 2

console.log(findMedianSortedArrays([1, 2], [3, 4]));

// TEST 3

console.log(findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]));

// TEST 4

console.log(findMedianSortedArrays([23, 26, 31, 35], [3, 5, 7, 9, 11, 16]));

// TEST 5

console.log(findMedianSortedArrays([0, 0], [0, 0]));

// TEST 6

console.log(findMedianSortedArrays([1, 2], [1, 1]));