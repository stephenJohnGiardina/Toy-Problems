/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = (head, n) => {
  let current = head;
  let length = 1;
  while (current.next !== null) {
    length += 1;
    current = current.next;
  }
  const index = length - n;
  if (index === 0) return head.next;
  current = head;
  let currentIndex = 1;
  while (current.next !== null) {
    if (index === currentIndex) {
      current.next = current.next.next;
      break;
    }
    currentIndex += 1;
    current = current.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

// TEST SUITE

function linkedListToArray(head) {
  const result = [];
  let currentNode = head;
  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return result;
}

function arraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// TEST 1

function test1() {
  const node1 = new ListNode(1);
  const node2 = new ListNode(2);
  const node3 = new ListNode(3);
  const node4 = new ListNode(4);
  const node5 = new ListNode(5);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  const actual = removeNthFromEnd(node1, 2);
  const expected = [1, 2, 3, 5];
  if (arraysEqual(linkedListToArray(actual), expected)) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const node1 = new ListNode();
  node1.next = null;
  const actual = (removeNthFromEnd(node1, 1));
  const expected = null;
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());
