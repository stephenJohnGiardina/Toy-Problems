def maxArea(height):
  result = 0
  a = 0
  b = len(height) - 1
  while a < b:
    if (height[a] < height[b]):
      result = max(result, height[a] * (b - a))
      a += 1
    else:
      result = max(result, height[b] * (b - a))
      b -= 1
  return result

# TEST SUITE

# TEST 1

def test1():
  actual = maxArea([3, 2, 12, 4])
  expected = 9
  if actual == expected:
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
  expected = 49
  if actual == expected:
    return '✔'
  return 'X'

print(test2())
