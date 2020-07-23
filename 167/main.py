
# Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

# The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

# Note:

# Your returned answers (both index1 and index2) are not zero-based.
# You may assume that each input would have exactly one solution and you may not use the same element twice.
# Example:

# Input: numbers = [2,7,11,15], target = 9
# Output: [1,2]
# Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

def twoSum(numbers, target):
  values = {}
  for i, elem in enumerate(numbers):
    comp = target - elem
    if (comp in values):
      return [values[comp] + 1, i + 1]
    values[elem] = i
  return []


# TEST SUITE

# TEST 1

print(twoSum([2, 7, 11, 15], 9))

# TEST 2

print(twoSum([2, 3, 4], 6))
