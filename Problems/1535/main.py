def getWinner(arr, k):
  currentWinner = None
  i = 0
  while i < k:
    if i > len(arr):
      break
    if arr[0] < arr[1]:
      if arr[1] != currentWinner:
        currentWinner = arr[1]
        i = 0
      el = arr[0]
      del arr[0:1]
      arr.append(el)
    elif arr[0] > arr[1]:
      if arr[0] != currentWinner:
        currentWinner = arr[0]
        i = 0
      el = arr[1]
      del arr[1:2]
      arr.append(el)
    i += 1
  return currentWinner

# TEST SUITE

# TEST 1

def test1():
  actual = getWinner([2, 1, 3, 5, 4, 6, 7], 2)
  expected = 5
  if (actual == expected):
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = getWinner([3, 2, 1], 10)
  expected = 3
  if (actual == expected):
    return '✔'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = getWinner([1, 9, 8, 2, 3, 7, 6, 4, 5], 7)
  expected = 9
  if (actual == expected):
    return '✔'
  return 'X'

print(test3())

# TEST 4

def test4():
  actual = getWinner([1, 11, 22, 33, 44, 55, 66, 77, 88, 99], 1000000000)
  expected = 99
  if (actual == expected):
    return '✔'
  return 'X'

print(test4())