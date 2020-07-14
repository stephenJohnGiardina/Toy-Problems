# There are two sorted arrays nums1 and nums2 of size m and n respectively.

# Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

# You may assume nums1 and nums2 cannot be both empty.

# Example 1:

# nums1 = [1, 3]
# nums2 = [2]

# The median is 2.0
# Example 2:

# nums1 = [1, 2]
# nums2 = [3, 4]

# The median is (2 + 3)/2 = 2.5
import math

def findMedianSortedArrays(nums1, nums2):
  if len(nums1) > len(nums2):
    return findMedianSortedArrays(nums2, nums1)
  x = len(nums1)
  y = len(nums2)
  start = 0
  end = x
  while start <= end:
    partition_x = math.floor((start + end) / 2)
    partition_y = math.floor(((x + y + 1) / 2) - partition_x)
    if partition_x == 0:
      max_x = -math.inf
    else:
      max_x = nums1[partition_x - 1]
    if partition_x == x:
      min_x = math.inf
    else:
      min_x = nums1[partition_x]
    if partition_y == 0:
      max_y = -math.inf
    else:
      max_y = nums2[partition_y - 1]
    if partition_y == y:
      min_y = math.inf
    else:
      min_y = nums2[partition_y]
    if max_x < min_y and max_y < min_x:
      if (x + y) % 2 == 0:
        return (max(max_x, max_y) + min(min_x, min_y)) / 2
      else:
        return max(max_x, max_y)
    elif max_x > min_y:
      end = partition_x - 1
    elif max_x < min_y:
      start = partition_x + 1
    else:
      if (x + y) % 2 == 0:
        return (max(max_x , max_y) + min(min_x, min_y)) / 2
      else:
        return max(max_x, max_y)


# TEST SUITE


# TEST 1

print(findMedianSortedArrays([1, 3], [2]))

# TEST 2

print(findMedianSortedArrays([1, 2], [3, 4]))

# TEST 3

print(findMedianSortedArrays([1, 3, 8, 9, 15], [7, 11, 18, 19, 21, 25]))

# TEST 4

print(findMedianSortedArrays([23, 26, 31, 35], [3, 5, 7, 9, 11, 16]))

# TEST 5

print(findMedianSortedArrays([0, 0], [0, 0]))

# TEST 6

print(findMedianSortedArrays([1, 2], [1, 1]))