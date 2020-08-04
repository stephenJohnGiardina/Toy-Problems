phoneNumberLetters = {
  '2': "abc",
  '3': "def",
  '4': "ghi",
  '5': "jkl",
  '6': "mno",
  '7': "pqrs",
  '8': "tuv",
  '9': "wxyz"
}

def letterCombinations(digits, string = ''):
  result = []
  if (len(digits) == 0):
    if (string != ''):
      result.append(string)
  else:
    for i in range(len(phoneNumberLetters[digits[0]])):
      array = letterCombinations(digits[1:], string + phoneNumberLetters[digits[0]][i])
      for i in range(len(array)):
        result.append(array[i])
  return result


# TEST SUITE

# TEST 1

print(letterCombinations("23"))

# TEST 2

print(letterCombinations(""))

