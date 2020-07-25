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
var mergeTwoLists = function(l1, l2) {
  l1 = linkedListToArray(l1);
  l2 = linkedListToArray(l2);
  let result = l1.concat(l2).sort((a, b) => a - b);
  return arrayToLinkedList(result);
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0: val)
  this.next = (next === undefined ? null: next)
}

function toString(head) {
  let result = '';
  while (head !== null) {
    result += head.val + ' -> ';
    head = head.next;
  }
  return result.substring(0, result.length - 4);
}

function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

function arrayToLinkedList(array) {
  if (array.length === 0) return null;
  let current;
  let head = new ListNode(array[0], null);
  current = head;
  for (let i = 1; i < array.length; i++) {
    current.next = new ListNode(array[i], null);
    current = current.next;
  }
  return head;
}

// TEST SUITE

// TEST 1

function test1() {
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(4);
  let node4 = new ListNode(1);
  let node5 = new ListNode(3);
  let node6 = new ListNode(4);
  node1.next = node2;
  node2.next = node3;
  node4.next = node5;
  node5.next = node6;
  return mergeTwoLists(node1, node4);
}

console.log(toString(test1()));

// TEST 2

function test2() {
  let node1 = new ListNode(-10);
  let node2 = new ListNode(-6);
  let node3 = new ListNode(-6);
  let node4 = new ListNode(-6);
  let node5 = new ListNode(-3);
  let node6 = new ListNode(5);
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  return mergeTwoLists(node1, null);
}

console.log(toString(test2()));
