# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].

def twoSum(nums, target):
  values = {}
  for i, elem in enumerate(nums) :
    comp = target - elem
    if comp in values:
      return[values[comp], i]
    values[elem] = i
  return []


# TEST SUITE

# TEST 1

print(twoSum([2, 7, 11, 15], 9))

# TEST 2

print(twoSum([3, 2, 4], 6))
