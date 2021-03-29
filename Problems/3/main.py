class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len = 0
        curr = 0
        obj = {}
        if len(s) < 2:
            return len(s)
        for i in range(len(s)):
            if s[i] not in obj:
                curr += 1
            else:
                curr = min(i - obj[s[i]], curr + 1)
            max_len = max(max_len, curr)
            obj[s[i]] = i
        return max_len


# TEST SUITE


# TEST 1

def test1():
    if Solution.lengthOfLongestSubstring(None, "") == 0:
        return '$$$$$'
    else:
        return 'X'

print(test1())

# TEST 2

def test2():
    if Solution.lengthOfLongestSubstring(None, " ") == 1:
        return '$$$$$'
    else:
        return 'X'

print(test2())

# TEST 3

def test3():
    if Solution.lengthOfLongestSubstring(None, "abcb") == 3:
        return '$$$$$'
    else:
        return 'X'

print(test3())

# TEST 4

def test4():
    if Solution.lengthOfLongestSubstring(None, "suqqjkuuxfeinpgjucmoc") == 12:
        return '$$$$$'
    else:
        return 'X'

print(test4())

# TEST 5


def test5():
    if Solution.lengthOfLongestSubstring(None, "mrjkdfwfsfjoblbhtjcpdbjdqkvevshhjssnzosstdgwqhelqibumkzcwujsnsbyktlkkgeflkectkpjuqfgdgjbduvqm") == 12:
        return '$$$$$'
    else:
        return 'X'

print(test5())
