# Given a 32-bit signed integer, reverse digits of an integer.

# Example 1:

# Input: 123
# Output: 321
# Example 2:

# Input: -123
# Output: -321
# Example 3:

# Input: 120
# Output: 21
# Note:
# Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

def reverse(x):
  # PROBEM WITH PYTHON!!!
  #  THIS
  #    |
  #    |
  #    |
  #  \   /
  #   \ /
  #    ˇ
  # return (int(str(x)[::-1]),int('-'+str(x)[::-1][0:len(str(x)[::-1])-1]))[x < 0]
  # DOES NOT WORK!!!

  s = str(x)
  result = s[::-1]
  if x < 0:
    result =  int('-' + result[0:len(result) - 1])
  result =  int(result)
  if (result > (2 ** 31) - 1 or result < -(2 ** 31)):
    return 0
  return result

  # TEST SUITE

  # TEST 1

print(reverse(123))

  # TEST 2

print(reverse(-123))

  # TEST 3

print(reverse(432))

  # TEST 4

print(reverse(987))

  # TEST 5

print(reverse(1534236469))