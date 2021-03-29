def subtractProductAndSum(n):
  string = str(n)
  product = 1
  add = 0
  for i in range(len(string)):
    product *= int(string[i])
    add += int(string[i])
  return product - add

# TEST SUITE

# TEST 1

def test1():
  actual = None
  expected = None
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = None
  expected = None
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())
