def divide(dividend, divisor):
  result = 0
  negative = False
  if dividend < 0:
    negative = True
    dividend = int(str(dividend)[1:len(str(dividend))])
  if divisor < 0:
    negative = not negative
    divisor = int(str(divisor)[1:len(str(divisor))])
  result = longDivision(dividend, divisor)
  if negative:
    result = int('-' + str(result))
  if result > 2147483647:
    result = 2147483647
  if result < -2147483648:
    result = -2147483648
  return result

def longDivision(dividend, divisor):
  if dividend < divisor:
    return 0
  dividendString = str(dividend)
  result = ''
  currentDividend = dividendString[0]
  dividendString = dividendString[1:len(dividendString)]
  while divisor > int(currentDividend):
    currentDividend += dividendString[0]
    dividendString = dividendString[1:len(dividendString)]
  while len(dividendString) != 0:
    product, minuend = findProduct(divisor, int(currentDividend))
    result += str(minuend)
    difference = int(currentDividend) - product
    currentDividend = int(str(difference) + dividendString[0])
    dividendString = dividendString[1:len(dividendString)]
  product, minuend = findProduct(divisor, int(currentDividend))
  result += str(minuend)
  return int(result)

def findProduct(divisor, dividend):
  minuend = 0
  product = 0
  while product <= dividend:
    minuend += 1
    product += divisor
  return [product - divisor, minuend - 1]


# TEST SUITE

# TEST 1

def test1():
  if divide(10, 3) == 3:
    return '✔'
  else:
    return 'X'

print(test1())

# TEST 2

def test2():
  if divide(7, -3) == -2:
    return '✔'
  else:
    return 'X'

print(test2())

# TEST 3

def test3():
  if divide(214, 2) == 214 / 2:
    return '✔'
  else:
    return 'X'

print(test3())

