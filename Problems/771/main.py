def numJewelsInStones(J, S):
  count = 0
  for i in S:
    if i in J:
      count += 1
  return count

# TEST SUITE

# TEST 1

def test1():
  actual = numJewelsInStones('aA', 'aAAbbbb')
  expected = 3
  if actual == expected:
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = numJewelsInStones('z', 'ZZ')
  expected = 0
  if actual == expected:
    return '✔'
  return 'X'

print(test2())
