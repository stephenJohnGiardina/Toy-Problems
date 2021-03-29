def trap(height):
  heights = {}
  i = 0
  while i < len(height) - 1:
    j = i + 1
    while j < len(height):
      k = i + 1
      while k < j:
        if height[k] < height[i] and height[k] < height[j]:
          minimum = min(height[i], height[j])
          if k not in heights:
            heights[k] = minimum - height[k]
          elif heights[k] < minimum - height[k]:
            heights[k] = minimum - height[k]
        k += 1
      if height[i] <= height[j]:
        i = j
      j += 1
    i += 1
  result = 0
  for key in heights:
    result += heights[key]
  return result

# TEST SUITE

# TEST 1

def test1():
  actual = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
  expected = 6
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = trap([1, 0, 1, 0, 1])
  expected = 2
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = trap([0, 5, 6, 4, 6, 1, 0, 0, 2, 7])
  expected = 23
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test3())
