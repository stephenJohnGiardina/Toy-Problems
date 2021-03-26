/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = (lists) => {
  return arrayToLinkedList(lists
    .map((list) => { return linkedListToArray(list); })
    .flat()
    .sort((a, b) => { return a - b; }));
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function linkedListToArray(l) {
  const result = [];
  while (l !== null) {
    result.push(l.val);
    l = l.next;
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

// TEST 1

function test1() {
  const list1 = arrayToLinkedList([1, 4, 5]);
  const list2 = arrayToLinkedList([1, 3, 4]);
  const list3 = arrayToLinkedList([2, 6]);
  const lists = [list1, list2, list3];
  const actual = JSON.stringify(linkedListToArray(mergeKLists(lists)));
  const expected = JSON.stringify([1, 1, 2, 3, 4, 4, 5, 6]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const list1 = arrayToLinkedList([1]);
  const lists = [list1];
  const actual = JSON.stringify(linkedListToArray(mergeKLists(lists)));
  const expected = JSON.stringify([1]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const list1 = arrayToLinkedList([]);
  const list2 = arrayToLinkedList([-1, 5, 11]);
  const list3 = arrayToLinkedList([]);
  const list4 = arrayToLinkedList([6, 10]);
  const lists = [list1, list2, list3, list4];
  const actual = JSON.stringify(linkedListToArray(mergeKLists(lists)));
  const expected = JSON.stringify([-1, 5, 6, 10, 11]);
  if (actual === expected) {
    return '✔';
  }
  return 'X';
}

console.log(test3());
