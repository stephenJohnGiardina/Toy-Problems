import math

def isPalendrome(x):
  if x < 0:
    return False
  x = str(x)
  if len(x) < 2:
    return True
  if len(x) % 2 != 0:
    x = x[0:math.floor(len(x) / 2)] + x[math.floor(len(x) / 2) + 1:5]
  while len(x) != 0:
    if (x[0] != x[len(x) - 1]):
      return False
    else:
      x = x[1:len(x) - 1]
  return True

# TEST SUITE

# TEST 1

def test1():
  actual = isPalendrome(121)
  expected = True
  if actual == expected:
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = isPalendrome(-121)
  expected = False
  if actual == expected:
    return '✔'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = isPalendrome(10)
  expected = False
  if actual == expected:
    return '✔'
  return 'X'

print(test3())
