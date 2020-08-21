def countGoodTriplets(arr, a, b, c):
  count = 0
  for i in range(0, len(arr) - 2):
    for j in range(i + 1, len(arr) - 1):
      for k in range(j + 1, len(arr)):
        if abs(arr[i] - arr[j]) <= a:
          if abs(arr[j] - arr[k]) <= b:
            if abs(arr[i] - arr[k]) <= c:
              count += 1
  return count

# TEST SUITE

# TEST 1

def test1():
  actual = countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3)
  expected = 4
  if actual == expected:
    return '✔'
  else:
    return 'X'

print(test1())

# TEST 2

def test2():
  actual = countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1)
  expected = 0
  if actual == expected:
    return '✔'
  else:
    return 'X'

print(test2())