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

def test1():
  actual = threeSumClosest([-1, 2, 1, -4], 1)
  expected = 2
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())
