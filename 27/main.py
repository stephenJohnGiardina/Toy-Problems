class Solution:
  def removeElement(self, nums, val):
    i = 0
    while i < len(nums):
      if (nums[i] == val):
        del nums[i]
        i -= 1
      i += 1
    return len(nums)

# TEST SUITE

# TEST 1

def test1():
  if Solution.removeElement(None, [3,2,2,3], 3) == 2:
    return "✔"
  else:
    return "X"

print(test1())

# TEST 2

def test2():
  if Solution.removeElement(None, [0,1,2,2,3,0,4,2], 2) == 5:
    return "✔"
  else:
    return "X"

print(test2())