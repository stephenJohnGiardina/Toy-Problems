def findTarget(root, target):
  array = []
  def helper(tree):
    array.append(tree.val)
    if tree.left:
      helper(tree.left)
    if tree.right:
      helper(tree.right)
    return
  helper(root)
  values = {}
  for i, elem in enumerate(array) :
    comp = target - elem
    if comp in values:
      return True
    values[elem] = i
  return False


class TreeNode:
  def __init__(self, val=0, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

# TEST SUITE

node1 = TreeNode(5)
node2 = TreeNode(3)
node3 = TreeNode(6)
node4 = TreeNode(2)
node5 = TreeNode(4)
node6 = TreeNode(7)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
node3.right = node6

# TEST 1

print(findTarget(node1,9))

# TEST 2

print(findTarget(node1,28))
