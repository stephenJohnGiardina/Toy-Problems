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
const addTwoNumbers = (l1, l2) => {
  if (!l1 || !l2) {
    return null;
  }
  let l1NumberString = '';
  let l2NumberString = '';
  const l1Length = getLength(l1);
  const l2Length = getLength(l2);

  for (let i = 0; i < l1Length; i += 1) {
    l1NumberString += removeTail(l1).val;
  }
  for (let i = 0; i < l2Length; i += 1) {
    l2NumberString += removeTail(l2).val;
  }
  const sum = addTwoStrings(l1NumberString, l2NumberString);
  const result = new ListNode(Number.parseInt(sum[sum.length - 1], 10));
  let previousNode = result;
  if (sum.length > 1) {
    for (let i = sum.length - 2; i >= 0; i -= 1) {
      const newNode = new ListNode(Number.parseInt(sum[i], 10));
      previousNode.next = newNode;
      previousNode = newNode;
    }
  }
  return result;
};

let getLength = (l) => {
  if (!l) {
    return null;
  }
  let count = 0;
  let current = l;
  while (current) {
    count += 1;
    current = current.next;
  }
  return count;
};

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
};

function addTwoStrings(str1, str2) {
  const string1 = reverseString(str1);
  const string2 = reverseString(str2);
  const longerString = string1.length > string2.length ? string1 : string2;
  let carry = false;
  let result = '';
  for (let i = 0; i < longerString.length; i += 1) {
    const number1 = Number.parseInt(string1[i], 10);
    const number2 = Number.parseInt(string2[i], 10);
    let nextNumber;
    if (!Number.isNaN(number1) && !Number.isNaN(number2)) {
      nextNumber = number1 + number2;
    } else if (!Number.isNaN(number1) && Number.isNaN(number2)) {
      nextNumber = number1;
    } else if (Number.isNaN(number1) && !Number.isNaN(number2)) {
      nextNumber = number2;
    }
    if (carry) {
      nextNumber += 1;
      carry = false;
    }
    if (nextNumber >= 10) {
      carry = true;
    }
    const digit = JSON.stringify(nextNumber)[JSON.stringify(nextNumber).length - 1];
    result = digit + result;
  }
  if (carry) {
    result = `1${result}`;
  }
  return result;
}

function reverseString(str) {
  const arr = str.split('');
  const reverseArr = arr.reverse();
  return reverseArr.join('');
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// TEST SUITE

function arrayToLinkedList(array) {
  const result = new ListNode(array[0]);
  let previousNode = result;
  if (array.length > 1) {
    for (let i = 1; i < array.length; i += 1) {
      const newNode = new ListNode(array[i]);
      previousNode.next = newNode;
      previousNode = newNode;
    }
  }
  return result;
}

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
  const l1 = [2, 4, 3];
  const l2 = [5, 6, 4];
  const actual = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  const expected = [7, 0, 8];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test1());

// TEST 2

function test2() {
  const l1 = [5];
  const l2 = [5];
  const actual = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  const expected = [0, 1];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test2());

// TEST 3

function test3() {
  const l1 = [1, 8];
  const l2 = [0];
  const actual = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  const expected = [1, 8];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test3());

// TEST 4

function test4() {
  const l1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
  const l2 = [5, 6, 4];
  const actual = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  const expected = [6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test4());

// TEST 5

function test5() {
  const l1 = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
    9, 9, 9, 9, 9, 9, 9];
  const l2 = [1];
  const actual = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)));
  const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
  if (arraysEqual(actual, expected)) {
    return '$$$$$';
  }
  return 'X';
}

console.log(test5());
