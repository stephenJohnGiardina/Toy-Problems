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
let addTwoNumbers = function(l1, l2) {
  if (!l1 || !l2) {
    return null;
  }
  let l1NumberString = '';
  let l2NumberString = '';
  let l1Length = getLength(l1);
  let l2Length = getLength(l2);

  for (let i = 0; i < l1Length; i++) {
    l1NumberString += removeTail(l1).val;
  }
  for (let i = 0; i < l2Length; i++) {
    l2NumberString += removeTail(l2).val;
  }
  let sum = addTwoStrings(l1NumberString, l2NumberString);
  let result = new ListNode(Number.parseInt(sum[sum.length - 1]));
  let previousNode = result;
  if (sum.length > 1) {
    for (let i = sum.length - 2; i >= 0; i--) {
      let newNode = new ListNode(Number.parseInt(sum[i]));
      previousNode.next = newNode;
      previousNode = newNode;
    }
  }
  return result;
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

function addTwoStrings(str1, str2) {
  str1 = reverseString(str1);
  str2 = reverseString(str2);
  let longerString = str1.length > str2.length ? str1 : str2;
  let carry = false;
  let result = '';
  for (let i = 0; i < longerString.length; i++) {
    let number1 = Number.parseInt(str1[i]);
    let number2 = Number.parseInt(str2[i]);
    let nextNumber;
    if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
      nextNumber = number1 + number2;
    } else if (!Number.isNaN(number1) && Number.isNaN(number2)) {
      nextNumber = number1;
    } else if (Number.isNaN(number1) && !Number.isNaN(number2)) {
      nextNumber = number2;
    }
    if (carry) {
      nextNumber++;
      carry = false;
    }
    if (nextNumber >= 10) {
      carry = true;
    }
    let digit = JSON.stringify(nextNumber)[JSON.stringify(nextNumber).length - 1];
    result = digit + result;
  }
  if (carry) {
    result = '1' + result;
  }
  return result;
}

function reverseString(str) {
  let arr = str.split('');
  let reverseArr = arr.reverse();
  return reverseArr.join('');
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// TEST SUITE

function arrayToLinkedList(array) {
  let result = new ListNode(array[0]);
  let previousNode = result;
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      let newNode = new ListNode(array[i]);
      previousNode.next = newNode;
      previousNode = newNode;
    }
  }
  return result;
}

function linkedListToArray(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
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
  let l1 = [2, 4, 3];
  let l2 = [5, 6, 4];
  let result = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  let expected = [7, 0, 8];
  if (arraysEqual(result, expected)) {
    return "✔";
  }
  else {
    return "X";
  }
}

console.log(test1());

// TEST 2

function test2() {
  let l1 = [5];
  let l2 = [5];
  let result = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)))
  let expected = [0, 1];
  if (arraysEqual(result, expected)) {
    return "✔";
  }
  else {
    return "X";
  }
}

console.log(test2());

// TEST 3

function test3() {
  let l1 = [1,8];
  let l2 = [0];
  let result = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  let expected = [1, 8];
  if (arraysEqual(result, expected)) {
    return "✔";
  }
  else {
    return "X";
  }
}

console.log(test3());

// TEST 4

function test4() {
  let l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
  let l2 = [5,6,4];
  let result = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  let expected = [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
  if (arraysEqual(result, expected)) {
    return "✔";
  }
  else {
    return "X";
  }
}

console.log(test4());

// TEST 5

function test5() {
  let l1 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
  l2 = [1];
  let result = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  let expected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
  if (arraysEqual(result, expected)) {
    return "✔";
  }
  else {
    return "X";
  }
}

console.log(test5());
