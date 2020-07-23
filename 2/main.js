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

let arrayToLinkedList = (array) => {
  let result = new ListNode(array[0]);
  let previousNode = result;
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
      let newNode = new ListNode(array[i]);
      previousNode.next = newNode;
      previousNode = newNode;
    }
  }
  // console.log('Result: ', result)
  return result;
}

// TEST 1

console.log(addTwoNumbers(arrayToLinkedList([2, 4, 3]), arrayToLinkedList([5, 6, 4])))

// TEST 2

console.log(addTwoNumbers(arrayToLinkedList([5]), arrayToLinkedList([5])))

// TEST 3

console.log(addTwoNumbers(arrayToLinkedList([1,8]), arrayToLinkedList([0])))

// TEST 4

console.log(addTwoNumbers(arrayToLinkedList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]), arrayToLinkedList([5,6,4])));

// TEST 5

console.log(addTwoNumbers(arrayToLinkedList([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]), arrayToLinkedList([1])));
