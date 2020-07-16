def longestPalindrome(s):
  if type(s) != type(''):
    return None
  if len(s) < 2:
    return s
  s = getModifiedString(s)
  P = [0]*len(s)
  center = 0
  rightBoundary = 0
  for i in range(len(s)):
    mirrorIndex = center - (i - center)
    if i < rightBoundary:
      P[i] = min(rightBoundary - i, P[mirrorIndex])
    right = i + (P[i] + 1)
    left = i - (P[i] + 1)
    while (right < len(s) and left >= 0 and s[left] == s[right]):
      P[i] += 1
      right += 1
      left -= 1
    if i + P[i] > rightBoundary:
      center = i
      rightBoundary = i + P[i]
  leng = max(P)
  index = P.index(leng)
  result = s[index - leng + 1:index + leng]
  return ''.join(result.split('|'))

def getModifiedString(string):
  result = ''
  for i in range(len(string)):
    result += '|' + string[i]
  return result + '|'



# TEST SUITE

# TEST 1

print(longestPalindrome("babad"))

# TEST 2

print(longestPalindrome("cbbd"))