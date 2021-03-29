/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  l1 = linkedListToArray(l1);
  l2 = linkedListToArray(l2);
  const result = l1.concat(l2).sort((a, b) => { return a - b; });
  return arrayToLinkedList(result);
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
function toString(head) {
  let result = '';
  while (head !== null) {
    result += `${head.val} -> `;
    head = head.next;
  }
  return result.substring(0, result.length - 4);
}
 */

function linkedListToArray(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function arrayToLinkedList(array) {
  if (array.length === 0) return null;
  let current;
  const head = new ListNode(array[0], null);
  current = head;
  for (let i = 1; i < array.length; i += 1) {
    current.next = new ListNode(array[i], null);
    current = current.next;
  }
  return head;
}

// TEST SUITE

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
  const node3 = new ListNode(4);
  const node4 = new ListNode(1);
  const node5 = new ListNode(3);
  const node6 = new ListNode(4);
  node1.next = node2;
  node2.next = node3;
  node4.next = node5;
  node5.next = node6;
  const actual = mergeTwoLists(node1, node4);
  const expected = [1, 1, 2, 3, 4, 4];
  if (arraysEqual(linkedListToArray(actual), expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const node1 = new ListNode(-10);
  const node2 = new ListNode(-6);
  const node3 = new ListNode(-6);
  const node4 = new ListNode(-6);
  const node5 = new ListNode(-3);
  const node6 = new ListNode(5);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  const actual = mergeTwoLists(node1, null);
  const expected = [-10, -6, -6, -6, -3, 5];
  if (arraysEqual(linkedListToArray(actual), expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());
