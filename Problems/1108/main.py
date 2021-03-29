def defangIPaddr(address):
  return address.replace('.', '[.]')


# TEST SUITE

# TEST 1

def test1():
  actual = defangIPaddr('1.1.1.1')
  expected = '1[.]1[.]1[.]1'
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = defangIPaddr('255.100.50.0')
  expected = '255[.]100[.]50[.]0'
  if actual == expected:
    return '$$$$$'
  return 'X'

print(test2())
