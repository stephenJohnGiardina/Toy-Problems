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

print(isPalendrome(121))

# TEST 2

print(isPalendrome(-121))

# TEST 1

print(isPalendrome(10))

