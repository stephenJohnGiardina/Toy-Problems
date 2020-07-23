# Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

# Example 1:

# Input: 121
# Output: true
# Example 2:

# Input: -121
# Output: false
# Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
# Example 3:

# Input: 10
# Output: false
# Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
# Follow up:

# Coud you solve it without converting the integer to a string?

import math

def isPalendrome(x):
  if x < 0:
    return False
  x = str(x)
  if len(x) < 2:
    return True
  if len(x) % 2 != 0:
    x = x[0:math.floor(len(x) / 2)] + x[math.floor(len(x) / 2) + 1:5]
  while len(x) != 0:
    if (x[0] != x[len(x) - 1]):
      return False
    else:
      x = x[1:len(x) - 1]
  return True


# TEST SUITE

# TEST 1

print(isPalendrome(121))

# TEST 2

print(isPalendrome(-121))

# TEST 1

print(isPalendrome(10))

