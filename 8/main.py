def myAtoi(string):
  result = ''
  haveHadNumber = False
  gotSign = False
  for i in range(len(string)):
    currentChar = string[i]
    if currentChar == ' ' and not haveHadNumber and not gotSign:
      continue
    elif (currentChar == '-' or currentChar == '+') and not haveHadNumber:
      if not gotSign:
        result+= currentChar
        gotSign = True
      else:
        break
    elif currentChar.isnumeric():
      haveHadNumber = True
      result+= currentChar
    elif not currentChar.isnumeric():
      if not haveHadNumber:
        return 0
      else:
        break
  if not haveHadNumber:
    return 0
  result = int(result)
  if result > (2 ** 31) - 1:
    return (2 ** 31) -1
  elif result < - (2 ** 31):
    return - (2 ** 31)
  return result

# TEST SUITE

# TEST 1

def test1():
  actual = myAtoi('42')
  expected = 42
  if (actual == expected):
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = myAtoi('   -42')
  expected = -42
  if (actual == expected):
    return '✔'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = myAtoi('4193 with words')
  expected = 4193
  if (actual == expected):
    return '✔'
  return 'X'

print(test3())

# TEST 4

def test4():
  actual = myAtoi('words and 987')
  expected = 0
  if (actual == expected):
    return '✔'
  return 'X'

print(test4())

# TEST 5

def test5():
  actual = myAtoi('-91283472332')
  expected = -2147483648
  if (actual == expected):
    return '✔'
  return 'X'

print(test5())

# TEST 6

def test6():
  actual = myAtoi('')
  expected = 0
  if (actual == expected):
    return '✔'
  return 'X'

print(test6())

# TEST 7

def test7():
  actual = myAtoi('-')
  expected = 0
  if (actual == expected):
    return '✔'
  return 'X'

print(test7())

# TEST 8

def test8():
  actual = myAtoi('+1')
  expected = 1
  if (actual == expected):
    return '✔'
  return 'X'

print(test8())

# TEST 9

def test9():
  actual = myAtoi('+-2')
  expected = 0
  if (actual == expected):
    return '✔'
  return 'X'

print(test9())

# TEST 10

def test10():
  actual = myAtoi('   +0 123')
  expected = 0
  if (actual == expected):
    return '✔'
  return 'X'

print(test10())

# TEST 11

def test11():
  actual = myAtoi('0-1')
  expected = 0
  if (actual == expected):
    return '✔'
  return 'X'

print(test11())
