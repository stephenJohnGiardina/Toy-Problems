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
    actual = isValid("()")
    expected = True
    if actual == expected:
        return "$$$$$"
    return "X"

print(test1())

# TEST 2

def test2():
    actual = isValid("()[]{}")
    expected = True
    if actual == expected:
        return "$$$$$"
    return "X"

print(test2())

# TEST 3

def test3():
    actual = isValid("(]")
    expected = False
    if actual == expected:
        return "$$$$$"
    return "X"

print(test3())

# TEST 4

def test4():
    actual = isValid("([)]")
    expected = False
    if actual == expected:
        return "$$$$$"
    return "X"

print(test4())

# TEST 5

def test5():
    actual = isValid("{[]}")
    expected = True
    if actual == expected:
        return "$$$$$"
    return "X"

print(test5())

# TEST 6

def test6():
    actual = isValid("[")
    expected = False
    if actual == expected:
        return "$$$$$"
    return "X"

print(test6())

# TEST 7

def test7():
    actual = isValid("]")
    expected = False
    if actual == expected:
        return "$$$$$"
    return "X"

print(test7())

# TEST 8

def test8():
    actual = isValid("(){" + "}" + "}{") # Divided to avoid python string formatting behavior
    expected = False
    if actual == expected:
        return "$$$$$"
    return "X"

print(test8())
