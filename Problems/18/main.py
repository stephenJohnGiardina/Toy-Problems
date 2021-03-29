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

def test1():
  actual = fourSum([1, 0, -1, 0, -2, 2], 0)
  expected = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0)
  expected = [
    [-3, -2, 2, 3],
    [-3, -1, 1, 3],
    [-3, 0, 0, 3],
    [-3, 0, 1, 2],
    [-2, -1, 0, 3],
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1],
  ]
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())