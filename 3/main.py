# Given a string, find the length of the longest substring without repeating characters.

# Example 1:

# Input: "abcabcbb"
# Output: 3
# Explanation: The answer is "abc", with the length of 3.
# Example 2:

# Input: "bbbbb"
# Output: 1
# Explanation: The answer is "b", with the length of 1.
# Example 3:

# Input: "pwwkew"
# Output: 3
# Explanation: The answer is "wke", with the length of 3.
#              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

def lengthOfLongestSubstring(s: str) -> int:
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

print(lengthOfLongestSubstring(""))

# TEST 2

print(lengthOfLongestSubstring(" "))

# TEST 3

print(lengthOfLongestSubstring("abcb"))

# TEST 4

print(lengthOfLongestSubstring("suqqjkuuxfeinpgjucmoc"))

# TEST 5

print(lengthOfLongestSubstring("mrjkdfwfsfjoblbhtjcpdbjdqkvevshhjssnzosstdgwqhelqibumkzcwujsnsbyktlkkgeflkectkpjuqfgdgjbduvqm"))
