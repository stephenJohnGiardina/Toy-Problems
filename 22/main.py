def generateParenthesis(n):

def isValid(s):
    stack = []
    if s[0] == ')' or s[0] == ']' or s[0] == '}':
        return False
    count = 0
    for char in s:
        count += 1
        if char == '(' or char == '[' or char == '{':
            stack.append(char)
        elif char == ')':
            if len(stack) == 0:
                return False
            if stack[len(stack) - 1] != '(':
                return False
            else:
                stack.pop()
        elif char == ']':
            if len(stack) == 0:
                return False
            if stack[len(stack) - 1] != '[':
                return False
            else:
                stack.pop()
        elif char == '}':
            if len(stack) == 0:
                return False
            if stack[len(stack) - 1] != '{':
                return False
            else:
                stack.pop()
    if len(stack) == 0:
        return True
    return False


# TEST SUITE

# TEST 1

def test1():
  actual = None
  expected = None
  if (actual == expected):
    return '✔'
  return 'X'

print(test1())

# TEST 2

def test2():
  actual = None
  expected = None
  if (actual == expected):
    return '✔'
  return 'X'

print(test2())