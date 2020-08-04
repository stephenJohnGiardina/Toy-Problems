DIGIT_VALUES = {
  0: 0,
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
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

print(romanToInt("III"))

# TEST 2

print(romanToInt("IV"))

# TEST 3

print(romanToInt("IX"))

# TEST 4

print(romanToInt("LVIII"))

# TEST 5

print(romanToInt("MCMXCIV"))