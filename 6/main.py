# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);
# Example 1:

# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# Example 2:

# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:

# P     I    N
# A   L S  I G
# Y A   H R
# P     I


def convert(s, numRows):
  if numRows == 1:
    return s
  distance = (2 * (numRows - 1))
  result = ''
  zigs = []
  currentZig = []
  for i in range(len(s)):
    if i % distance == 0:
      result += s[i]
      zigs.append(currentZig)
      currentZig = []
    else:
      currentZig.append(s[i])
  while len(currentZig) != distance - 1:
    currentZig.append(0)
  zigs.append(currentZig)
  del zigs[0]
  for i in range(numRows - 2):
    for j in range(len(zigs)):
      left = zigs[j][0]
      right = zigs[j][len(zigs[j]) - 1]
      del zigs[j][0]
      zigs[j].pop()
      if left != 0:
        result += left
      if right != 0:
        result += right
  for i in range(len(zigs)):
    if zigs[i][0] != 0:
      result += zigs[i][0]
  return result




# TEST SUITE

# TEST 1

print(convert('PAYPALISHIRING', 3) == 'PAHNAPLSIIGYIR')

# TEST 2

print(convert('PAYPALISHIRING', 4) == 'PINALSIGYAHRPI')

# TEST 3

print(convert('', 1))