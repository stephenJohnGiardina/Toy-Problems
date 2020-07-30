/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  let array = linkedListToArray(head);
  if (array.length < 2) return head
  let pairs = [];
  for (let i = 0; i < array.length; i++) {
    let pair1 = array[i];
    let pair2 = array[i + 1];
    let pair = [pair2, pair1];
    if (pair[0] === undefined) pair = [pair1];
    pairs.push(...pair);
    i++;
  }
  return arrayToLinkedList(pairs);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function linkedListToArray(l) {
  let result = [];
  while (l !== null) {
    result.push(l.val);
    l = l.next;
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
  let head = arrayToLinkedList([1,2,3,4]);
  let actual = JSON.stringify(linkedListToArray(swapPairs(head)));
  let expected = JSON.stringify([2,1,4,3]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  let head = arrayToLinkedList([1,2,3]);
  let actual = JSON.stringify(linkedListToArray(swapPairs(head)));
  let expected = JSON.stringify([2,1,3]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test2());

// TEST 3

function test3() {
  let head = arrayToLinkedList([1]);
  let actual = JSON.stringify(linkedListToArray(swapPairs(head)));
  let expected = JSON.stringify([1]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test3());

// TEST 4

function test4() {
  let head = arrayToLinkedList([0,7,2,6,6,8,0,3,4,5]);
  let actual = JSON.stringify(linkedListToArray(swapPairs(head)));
  let expected = JSON.stringify([7,0,6,2,8,6,3,0,5,4]);
  if (actual === expected) {
    return "✔";
  } else {
    return "X";
  }
}

console.log(test4());
