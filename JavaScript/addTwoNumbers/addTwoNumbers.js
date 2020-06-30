/**
 *
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

let addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) {
    return null;
  }
  let l1Number = 0;
  let l2Number = 0;
  let l1Length = getLength(l1);
  let l2Length = getLength(l2);
  let l1Power = Math.pow(10, getLength(l1) - 1);
  let l2Power = Math.pow(10, getLength(l2) - 1);
  for (let i = 0; i < l1Length; i++) {
    l1Number += removeTail(l1).val * l1Power;
    l1Power /= 10;
  }
  for (let i = 0; i < l2Length; i++) {
    l2Number += removeTail(l2).val * l2Power;
    l2Power /= 10;
  }
  return l1Number + l2Number;
}

let getLength = (l) => {
  if (!l) {
    return null;
  }
  let count = 0;
  let current = l;
  while (current) {
    count ++;
    current = current.next;
  }
  return count;
}

let removeTail = (l) => {
  if (!l) {
    return null;
  }
  let previous = l;
  if (previous.next === null) {
    return previous;
  }
  let current = l.next;
  while (previous) {
    if (current.next === null) {
      break;
    }
    previous = previous.next;
    current = current.next;
  }
  previous.next = null;
  return current;
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// TEST SUITE

let l1a = new ListNode(2);
let l1b = new ListNode(4);
l1a.next = l1b;
let l1c = new ListNode(3);
l1b.next = l1c;
let l2a = new ListNode(5);
let l2b = new ListNode(6);
l2a.next = l2b;
let l2c = new ListNode(4);
l2b.next = l2c;

console.log(addTwoNumbers(l1a, l2a))