DIGIT_VALUES = {
  0: '',
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
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

print(intToRoman(3))

# TEST 2

print(intToRoman(4))

# TEST 3

print(intToRoman(9))

# TEST 4

print(intToRoman(58))

# TEST 5

print(intToRoman(1994))

# TEST 6

print(intToRoman(10))

# TEST 7

print(intToRoman(100))