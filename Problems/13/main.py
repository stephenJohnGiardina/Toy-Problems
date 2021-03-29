DIGIT_VALUES = {
  0: 0,
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}


def romanToInt(s):
  result = 0
  prev = 0
  for i in range(len(s)):
    if DIGIT_VALUES[prev] < DIGIT_VALUES[s[i]]:
      result -= 2 * DIGIT_VALUES[prev]
    result += DIGIT_VALUES[s[i]]
    prev = s[i]
  return result


# TEST SUITE

# TEST 1

def test1():
  actual = romanToInt('III')
  expected = 3
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = romanToInt('IV')
  expected = 4
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test2())

# TEST 3

def test3():
  actual = romanToInt('IX')
  expected = 9
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test3())

# TEST 4

def test4():
  actual = romanToInt('LVIII')
  expected = 58
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test4())

# TEST 5

def test5():
  actual = romanToInt('MCMXCIV')
  expected = 1994
  if (actual == expected):
    return '$$$$$'
  return 'X'

print(test5())
