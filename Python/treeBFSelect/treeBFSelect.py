# /**
#   *
#   * Implement a `BFSelect` method on this Tree class.
#   *
#   * BFSelect accepts a filter function, calls that function on each of the nodes
#   * in Breadth First order, and returns a flat array of node values of the tree
#   * for which the filter returns true.
#   *
#   * Example:
#   *   var root1 = new Tree(1);
#   *   var branch2 = root1.addChild(2);
#   *   var branch3 = root1.addChild(3);
#   *   var leaf4 = branch2.addChild(4);
#   *   var leaf5 = branch2.addChild(5);
#   *   var leaf6 = branch3.addChild(6);
#   *   var leaf7 = branch3.addChild(7);
#   *   root1.BFSelect(function (value, depth) {
#   *     return value % 2;
#   *   })
#   *   // [1, 3, 5, 7]
#   *
#   *   root1.BFSelect(function (value, depth) {
#   *     return depth === 1;
#   *   })
#   *   // [2, 3]
#   *
#   */

# /*
#  * Basic tree that stores a value.
#  */

# var Tree = function(value) {
#   this.value = value;
#   this.children = [];
# };



# Tree.prototype.BFSelect = function(filter) {
#   // return an array of values for which the function filter(value, depth) returns true


# /**
#  * You shouldn't need to change anything below here, but feel free to look.
#   */

# /**
#   * add an immediate child
#   * (wrap values in Tree nodes if they're not already)
#   */
# Tree.prototype.addChild = function(child) {
#   // return the new child node for convenience


# /**
#   * check to see if the provided tree is already a child of this
#   * tree __or any of its sub trees__
#   */
# Tree.prototype.isDescendant = function(child) {
#     // `child` is an immediate child of this tree
#         // `child` is descendant of this tree

# /**
#   * remove an immediate child
#   */
# Tree.prototype.removeChild = function(child) {
#     // remove the child

class Tree:
  def __init__(self, value):
    self.value = value
    self.children = []

  def BFSelect(self, filter):
    result = []
    queue = []
    temp = self
    depth = 0
    generationSize = 0
    while (bool(temp)):
      if (filter(temp.value, depth)):
        result.append(temp.value)
      for i in range(len(self.children)):
        queue.append(self.children[i])
      if (generationSize == 0):
        generationSize = len(queue) - 1
        depth += 1
      elif (generationSize != 0):
        generationSize -= 1
      temp = queue.pop(0)
    return result

  def addChild(self, child):
    if (not bool(child) or bool(isinstance(Tree, child))):
      child = Tree(child)
    if (not self.isDescendant(child)):
      self.children.append(child)
    else:
      print('That child is already a child of this tree')
    return child

  def isDescendant(self, child):
    if (child in self.children):
      return True
    else:
      for i in range(0, len(self.children) - 1):
        if (self.children[i].isDescendant(child)):
          return True
      return False

  def removeChild(self, child):
    if (child in self.children):
      index = self.children.index(child)
      del  self.children[index:index + 1]
    else:
      print('That node is not an immediate child of this tree')


root1 = Tree(1)
branch2 = root1.addChild(2)
branch3 = root1.addChild(3)
leaf4 = branch2.addChild(4)
leaf5 = branch2.addChild(5)
leaf6 = branch3.addChild(6)
leaf7 = branch3.addChild(7)

