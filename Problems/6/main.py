def convert(s, numRows):
  if numRows == 1:
    return s
  distance = (2 * (numRows - 1))
  result = ''
  zigs = []
  currentZig = []
  for i in range(len(s)):
    if i % distance == 0:
      result += s[i]
      zigs.append(currentZig)
      currentZig = []
    else:
      currentZig.append(s[i])
  while len(currentZig) != distance - 1:
    currentZig.append(0)
  zigs.append(currentZig)
  del zigs[0]
  for i in range(numRows - 2):
    for j in range(len(zigs)):
      left = zigs[j][0]
      right = zigs[j][len(zigs[j]) - 1]
      del zigs[j][0]
      zigs[j].pop()
      if left != 0:
        result += left
      if right != 0:
        result += right
  for i in range(len(zigs)):
    if zigs[i][0] != 0:
      result += zigs[i][0]
  return result

# TEST SUITE

# TEST 1

def test1():
  actual = convert('PAYPALISHIRING', 3)
  expected = 'PAHNAPLSIIGYIR'
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = convert('PAYPALISHIRING', 4)
  expected = 'PINALSIGYAHRPI'
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = convert('', 1)
  expected = ''
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test3())