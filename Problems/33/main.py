def search(nums, target):
  import math
  if len(nums) == 0:
    return -1
  midpoint = 0
  for i in range(len(nums)):
    if nums[midpoint] < nums[i]:
      midpoint += 1
  if nums[midpoint] == target:
    return midpoint
  if target < nums[0]:
    max = len(nums) - 1
    min = midpoint + 1
  else:
    max = midpoint
    min = 0
  midpoint = max - (math.floor((max - min) / 2) or 1)
  if midpoint == -1:
    return -1
  if max == min and nums[max] == target:
    return max
  while min != max:
    if min > max:
      return -1
    if nums[midpoint] == target:
      return midpoint
    if nums[midpoint] > target:
      max = midpoint
    elif nums[midpoint] < target:
      min = midpoint
    if midpoint == max - (math.floor((max - min) / 2) or 1):
      min += 1
    midpoint = max - (math.floor((max - min) / 2) or 1)
  if nums[max] == target:
    return max
  return -1

# TEST SUITE

# TEST 1

def test1():
  actual = search([4, 5, 6, 7, 0, 1, 2], 0)
  expected = 4
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = search([4, 5, 6, 7, 0, 1, 2], 3)
  expected = -1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = search([1, 3], 1)
  expected = 0
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test3())

# TEST 4

def test4():
  actual = search([3, 1], 1)
  expected = 1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test4())

# TEST 5

def test5():
  actual = search([], 5)
  expected = -1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test5())

# TEST 6

def test6():
  actual = search([1], 2)
  expected = -1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test6())

# TEST 7

def test7():
  actual = search([3, 1], 0)
  expected = -1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test7())

# TEST 8

def test8():
  actual = search([5, 1, 3], 3)
  expected = 2
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test8())

# TEST 9

def test9():
  actual = search([1], 0)
  expected = -1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test9())

# TEST 10

def test10():
  actual = search([1, 3], 3)
  expected = 1
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test10())
