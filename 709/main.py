def toLowerCase(str):
  return str.lower()


# TEST SUITE

# TEST 1

def test1():
  actual = toLowerCase('Hello')
  expected = 'hello'
  if actual == expected:
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = toLowerCase('here')
  expected = 'here'
  if actual == expected:
    return '✔'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = toLowerCase('LOVELY')
  expected = 'lovely'
  if actual == expected:
    return '✔'
  return 'X'

print(test3())
