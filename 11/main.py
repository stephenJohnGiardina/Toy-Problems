# Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

# Note: You may not slant the container and n is at least 2.


# The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.



# Example:

# Input: [1,8,6,2,5,4,8,3,7]
# Output: 49

def maxArea(height):
  result = 0
  a = 0
  b = len(height) - 1
  while a < b:
    if (height[a] < height[b]):
      result = max(result, height[a] * (b - a))
      a += 1
    else:
      result = max(result, height[b] * (b - a))
      b -= 1
  return result



# TEST SUITE

# TEST 1

print(maxArea([3,2,12,4]))

# TEST 2

print(maxArea([1,8,6,2,5,4,8,3,7]))
