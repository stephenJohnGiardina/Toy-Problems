# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

# Note:

# The solution set must not contain duplicate triplets.

# Example:

# Given array nums = [-1, 0, 1, 2, -1, -4],

# A solution set is:
# [
#   [-1, 0, 1],
#   [-1, -1, 2]
# ]

def threeSum(nums):
  nums = sorted(nums)
  result = []
  for i in range(len(nums) - 2):
    if i == 0 or (i > 0 and nums[i] != nums[i - 1]):
      low = i + 1
      high = len(nums) - 1
      sum = 0 - nums[i]
      while low < high:
        if nums[low] + nums[high] == sum :
          result.append([nums[i], nums[low], nums[high]])
          while (low < high and nums[low] == nums[low + 1]):
            low += 1
          while (low < high and nums[high] == nums[high - 1]):
            high -= 1
          low += 1
          high -= 1
        elif nums[low] + nums[high] > sum :
          high -= 1
        else:
          low += 1
  return result


# TEST SUITE

# TEST 1

print(threeSum([-1, 0, 1, 2, -1, -4]))

# TEST 2

print(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]))