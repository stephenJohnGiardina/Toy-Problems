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

def test1():
  actual = reverse(123)
  expected = 321
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

  # TEST 2

def test2():
  actual = reverse(-123)
  expected = -321
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())

  # TEST 3

def test3():
  actual = reverse(432)
  expected = 234
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test3())

  # TEST 4

def test4():
  actual = reverse(987)
  expected = 789
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test4())


  # TEST 5

def test5():
  actual = reverse(1534236469)
  expected = 0
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test5())
