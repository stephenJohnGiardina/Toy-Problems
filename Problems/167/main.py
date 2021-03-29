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

def test1():
  actual = twoSum([2, 7, 11, 15], 9)
  expected = [1, 2]
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = twoSum([3, 3], 6)
  expected = [1, 2]
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test2())
