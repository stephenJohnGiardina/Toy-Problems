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

print(myAtoi('42'))

# TEST 2

print(myAtoi('   -42'))

# TEST 3

print(myAtoi('4193 with words'))

# TEST 4

print(myAtoi('words and 987'))

# TEST 5

print(myAtoi('-91283472332'))

# TEST 6

print(myAtoi(''))

# TEST 7

print(myAtoi('-'))

# TEST 8

print(myAtoi('+1'))

# TEST 9

print(myAtoi('+-2'))

# TEST 10

print(myAtoi('   +0 123'))

# TEST 11

print(myAtoi('0-1'))
