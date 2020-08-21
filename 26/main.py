class Solution:
  def removeDuplicates(self, nums):
    i = 0
    while i < len(nums):
      if i == len(nums) - 1:
        break
      if nums[i] == nums[i + 1]:
        del nums[i]
        i -= 1
      i += 1
    return len(nums)

# TEST SUITE

# TEST 1

def test1():
  if Solution.removeDuplicates(None, [1,1,2]) == 2:
    return '✔'
  else:
    return 'X'

print(test1())

# TEST 2

def test2():
  if Solution.removeDuplicates(None, [0,0,1,1,1,2,2,3,3,4]) == 5:
    return '✔'
  else:
    return 'X'

print(test2())