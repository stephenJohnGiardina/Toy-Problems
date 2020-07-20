# Implement atoi which converts a string to an integer.

# The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

# The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

# If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

# If no valid conversion could be performed, a zero value is returned.

# Note:

# Only the space character ' ' is considered as whitespace character.
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
# Example 1:

# Input: "42"
# Output: 42
# Example 2:

# Input: "   -42"
# Output: -42
# Explanation: The first non-whitespace character is '-', which is the minus sign.
#              Then take as many numerical digits as possible, which gets 42.
# Example 3:

# Input: "4193 with words"
# Output: 4193
# Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
# Example 4:

# Input: "words and 987"
# Output: 0
# Explanation: The first non-whitespace character is 'w', which is not a numerical
#              digit or a +/- sign. Therefore no valid conversion could be performed.
# Example 5:

# Input: "-91283472332"
# Output: -2147483648
# Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
#              Thefore INT_MIN (−231) is returned.


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
