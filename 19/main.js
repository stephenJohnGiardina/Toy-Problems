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
var removeNthFromEnd = function(head, n) {
  let current = head;
  let length = 1;
  while (current.next !== null) {
    length++;
    current = current.next;
  }
  let index = length - n;
  if (index === 0) return head.next;
  current = head;
  let currentIndex = 1;
  while (current.next !== null) {
    if (index === currentIndex) {
      current.next = current.next.next;
      break;
    }
    currentIndex++;
    current = current.next;
  }
  return head;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


// TEST SUITE

// TEST 1

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

console.log(removeNthFromEnd(node1, 2))

// TEST 2

node1.next = null;

console.log(removeNthFromEnd(node1, 1))