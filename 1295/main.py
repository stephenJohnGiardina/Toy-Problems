def findNumbers(nums):
  count = 0
  for i in range(len(nums)):
    if len(str(nums[i])) % 2 == 0:
      count += 1
  return count


# TEST SUITE

# TEST 1

def test1():
  actual = findNumbers([12, 345, 2, 6, 7896])
  expected = 2
  if actual == expected:
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = findNumbers([555, 901, 482, 1771])
  expected = 1
  if actual == expected:
    return '✔'
  return 'X'

print(test2())
