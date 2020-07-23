# Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.


# Example 1:

# Input: nums = [-1,2,1,-4], target = 1
# Output: 2
# Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

import datetime

def threeSumClosest(nums, target):
  nums = sorted(nums)
  result = nums[0] + nums[1] + nums[len(nums) - 1]
  for i in range(len(nums) - 2):
    if i == 0 or (i > 0 and nums[i] != nums[i - 1]):
      low = i + 1
      high = len(nums) - 1
      while low < high:
        sum = nums[i] + nums[low] + nums[high]
        if sum > target:
          high -= 1
        else:
          low += 1
        if abs(target - sum) < abs(target - result):
          result = sum
  return result


# TEST SUITE

# TEST 1

print(threeSumClosest([-1,2,1,-4], 1))

# TEST 2

print(threeSumClosest([-1,2,1,-4], 1))

# TEST 3

print(threeSumClosest([-28,-74,55,1,-10,28,78,-39,-73,-89,-81,-73,77,-14,86,80,43,-60,56,-5,33,30,34,-11,-38,87,27,66,31,-58,14,30,56,21,-84,-9,58,-94,-75,-64,71,64,-43,67,42,-90,95,81,43,-61,61,9,-43,-77,6,29,-23,40,-56,-39,65,-20,82,-8,35,-16,-39,46,-27,98,-96,-43,87,85,57,5,18,79,-59,90,-56,-88,-64,42,89,58,66,2,-84,60,76,-60,-91,26,-59,-76,21,75,29,42,21,1,0,72,22,-57,97,92,88,1,-32,-26,73,-38,-83,86,-46,-58,-23,-28,-94,-77,-34,-42,-51,34,87,-36,27,27,-53,80,-66,-77,100,68,56,-15,-11,77,67,11,-37,79,20,5,51,-37,-55,38,85,-46,15,96,-50,55,49,-3,46,-48,-20,5,4,19,-22,12,96,-79,-51,70,-79,-51,-23,-45,-1,68,-11,-91,-49,75,0,10,45,39,96,-63,-100,-33,33,24,2,-89,-31,62,56,-84,-90,-84,-48,62,-65,83,4,-19,-25,39,67], -192))