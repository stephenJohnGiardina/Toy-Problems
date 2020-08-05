DIGIT_VALUES = {
  0: '',
  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX',
  10: 'X',
  20: 'XX',
  30: 'XXX',
  40: 'XL',
  50: 'L',
  60: 'LX',
  70: 'LXX',
  80: 'LXXX',
  90: 'XC',
  100: 'C',
  200: 'CC',
  300: 'CCC',
  400: 'CD',
  500: 'D',
  600: 'DC',
  700: 'DCC',
  800: 'DCCC',
  900: 'CM',
  1000: 'M',
  2000: 'MM',
  3000: 'MMM',
}

def intToRoman(num):
  string = str(num)
  result = ''
  power = len(string) - 1
  for i in range(len(string)):
    result = result + DIGIT_VALUES[int(string[i]) * (10 ** power)]
    power -= 1
  return result


# TEST SUITE

# TEST 1

def test1():
  actual = intToRoman(3)
  expected = 'III'
  if (actual == expected):
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = intToRoman(4)
  expected = 'IV'
  if (actual == expected):
    return '✔'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = intToRoman(9)
  expected = 'IX'
  if (actual == expected):
    return '✔'
  return 'X'

print(test3())

# TEST 4

def test4():
  actual = intToRoman(58)
  expected = 'LVIII'
  if (actual == expected):
    return '✔'
  return 'X'

print(test4())

# TEST 5

def test5():
  actual = intToRoman(1994)
  expected = 'MCMXCIV'
  if (actual == expected):
    return '✔'
  return 'X'

print(test5())

# TEST 6

def test6():
  actual = intToRoman(10)
  expected = 'X'
  if (actual == expected):
    return '✔'
  return 'X'

print(test6())

# TEST 7

def test7():
  actual = intToRoman(100)
  expected = 'C'
  if (actual == expected):
    return '✔'
  return 'X'

print(test7())