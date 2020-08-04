def fourSum(nums, target):
  nums = sorted(nums)
  result = []
  memory = []
  for i in range(0, len(nums) - 3):
    for j in range(i + 1, len(nums) - 2):
      for k in range(j + 1, len(nums) - 1):
        for l in range(k + 1, len(nums)):
          if (nums[i] + nums[j] + nums[k] + nums[l] == target and str([nums[i], nums[j], nums[k], nums[l]]) not in memory):
            memory.append(str([nums[i], nums[j], nums[k], nums[l]]))
            result.append([nums[i], nums[j], nums[k], nums[l]])
  return result


# TEST SUITE

# TEST 1

print(fourSum([1, 0, -1, 0, -2, 2], 0))

# TEST 2

print(fourSum([-3,-2,-1,0,0,1,2,3], 0))