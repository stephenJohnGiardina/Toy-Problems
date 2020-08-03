# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def addTwoNumbers(l1, l2):
  if not l1 or not l2:
    return None
  l1NumberString = ''
  l2NumberString = ''
  l1Length = getLength(l1)
  l2Length = getLength(l2)
  for i in range(l1Length):
    l1NumberString += str(removeTail(l1).val)
  for i in range(l2Length):
    l2NumberString += str(removeTail(l2).val)
  sum = str(int(l1NumberString) + int(l2NumberString))
  result = ListNode(int(sum[len(sum) - 1]))
  previousNode = result
  if len(sum) > 1:
    for i in range(len(sum) - 2, -1, -1):
      newNode = ListNode(int(sum[i]))
      previousNode.next = newNode
      previousNode = newNode
  return result

def getLength(l):
  if not l:
    return 0
  count = 0
  current = l
  while current:
    count += 1
    current = current.next
  return count

def removeTail(l):
  if not l:
    return None
  previous = l
  if previous.next == None:
    return previous
  current = l.next
  while previous:
    if current.next == None:
      break
    previous = previous.next
    current = current.next
  previous.next = None
  return current

class ListNode:
  def __init__(self, val=None):
    self.val = val
    self.next = None


# TEST SUITE

def arrayToLinkedList(array):
  if len(array) != 0:
    result = ListNode(array[0])
  else:
    return None
  previousNode = result
  if len(array) > 1:
    for i in  range(1, len(array)):
      newNode = ListNode(array[i])
      previousNode.next = newNode
      previousNode = newNode
  return result

def linkedListToArray(head):
  result = []
  while head != None:
    result.append(head.val)
    head = head.next
  return result

# TEST 1

def test1():
  l1 = [2, 4, 3]
  l2 = [5, 6, 4]
  solution = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)))
  if solution == [7, 0, 8]:
    return "✔"
  else:
    return "X"

print(test1())

# TEST 2

def test2():
  l1 = [5]
  l2 = [5]
  solution = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)))
  if solution == [0, 1]:
    return "✔"
  else:
    return "X"

print(test2())

# TEST 3

def test3():
  l1 = [1,8]
  l2 = [0]
  solution = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)))
  if solution == [1, 8]:
    return "✔"
  else:
    return "X"

print(test3())

# TEST 4

def test4():
  l1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
  l2 = [5,6,4]
  solution = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)))
  if solution == [6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]:
    return "✔"
  else:
    return "X"

print(test4())

# TEST 5

def test5():
  l1 = [9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]
  l2 = [1]
  solution = linkedListToArray(addTwoNumbers(arrayToLinkedList(l1), arrayToLinkedList(l2)))
  if solution == [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]:
    return "✔"
  else:
    return "X"

print(test5())
