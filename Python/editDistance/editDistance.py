# Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

# Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

def editDistance(str1, str2):
  matrix = []
  str1 = " " + str1
  str2 = " " + str2
  for i in range(len(str1)):
    matrix.append([])
    for j in range(len(str2)):
      matrix[i].append(0)
  matrix[0][0] = 0
  j = 0
  for i in range(len(str1)):
    for j in range(len(str2)):
      if i == 0 and j != 0:
        matrix[i][j] = matrix[i][j - 1] + 1
      elif i != 0 and j == 0:
        matrix[i][j] = matrix[i - 1][j] + 1
      elif i != 0 and j != 0:
        if str1[i] == str2[j]:
          matrix[i][j] = matrix[i - 1][j - 1]
        else:
          matrix[i][j] = min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1
  return matrix[len(matrix) - 1][len(matrix[0]) - 1]

print(editDistance("jrok", "trek"))