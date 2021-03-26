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
const findTarget = (root, k) => {
  const arr = treeToArray(root);
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i === j) {
        continue;
      } else if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
};

const treeToArray = (root) => {
  const result = [];
  const queue = [];
  let temp = root;
  while (temp) {
    result.push(temp.val);
    if (temp.left !== null) queue.push(temp.left);
    if (temp.right !== null) queue.push(temp.right);
    temp = queue.shift();
  }
  return result;
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
  return this;
}

// TEST SUITE

const root1 = new TreeNode(5);
const root2 = new TreeNode(3);
const root3 = new TreeNode(6);
root1.left = root2;
root1.right = root3;
const root4 = new TreeNode(2);
const root5 = new TreeNode(4);
root2.left = root4;
root2.right = root5;
const root6 = new TreeNode(7);
root3.right = root6;

// TEST 1

function test1() {
  const actual = findTarget(root1, 9);
  const expected = true;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const actual = findTarget(root1, 28);
  const expected = false;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
