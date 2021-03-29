class Solution:
  def strStr(self, haystack, needle):
    i = 0
    if haystack == '' and needle == '':
      return 0
    while i < len(haystack) - len(needle) + 1:
      if (haystack[i:i + len(needle)] == needle):
        return i
      i += 1
    return -1


# TEST SUITE

# TEST 1

def test1():
  if Solution.strStr(None, "hello", "ll") == 2:
    return '$$$$$'
  else:
    return 'X'

print(test1())

# TEST 2

def test2():
  if Solution.strStr(None, "aaaaa", "bba") == -1:
    return '$$$$$'
  else:
    return 'X'

print(test2())

# TEST 3

def test3():
  if Solution.strStr(None, "", "") == 0:
    return '$$$$$'
  else:
    return 'X'

print(test3())

# TEST 4

def test4():
  if Solution.strStr(None, "a", "a") == 0:
    return '$$$$$'
  else:
    return 'X'

print(test4())