/**
 * Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True


Example 2:

Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
 */



 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  let arr = treeToArray(root);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
};

let treeToArray = function(root) {
  let result = [];
  let queue = [];
  let temp = root;
  while (temp) {
    result.push(temp.val);
    if (temp.left !== null) queue.push(temp.left);
    if (temp.right !== null) queue.push(temp.right);
    temp = queue.shift();
  }
  return result;
}


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
  return this;
}


// TEST SUITE

let root1 = new TreeNode(5);
let root2 = new TreeNode(3);
let root3 = new TreeNode(6);
root1.left = root2
root1.right = root3
let root4 = new TreeNode(2);
let root5 = new TreeNode(4);
root2.left = root4
root2.right = root5
let root6 = new TreeNode(7);
root3.right = root6

console.log(findTarget(root1, 9));