# Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

# A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



# Example:

# Input: "23"
# Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
# Note:

# Although the above answer is in lexicographical order, your answer could be in any order you want.


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

