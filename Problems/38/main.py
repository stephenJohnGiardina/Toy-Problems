def countAndSay(n):
  current = '1'
  i = 1
  while i < n:
    tempArray = [[current[0], 1]]
    for j in range(1, len(current)):
      if current[j] == tempArray[len(tempArray) - 1][0]:
        tempArray[len(tempArray) - 1][1] += 1
      else :
        tempArray.append([current[j], 1])
    current = ''
    for j in range(len(tempArray)):
      current += str(tempArray[j][1]) + tempArray[j][0]
    i += 1
  return current

# TEST SUITE

# TEST 1

def test1():
  actual = countAndSay(1)
  expected = '1'
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = countAndSay(4)
  expected = '1211'
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())
