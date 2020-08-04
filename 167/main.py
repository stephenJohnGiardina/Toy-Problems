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
