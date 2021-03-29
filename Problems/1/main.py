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

def test1():
  if twoSum([2, 7, 11, 15], 9):
    return $$$$$
  return X

print(test1())

# TEST 2

def test2():
  if twoSum([3, 2, 4], 6):
    return $$$$$
  return X

print(test2())
