# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
def swapPairs(head):
  array = linkedListToArray(head)
  if len(array) < 2:
    return head
  pairs = []
  i = 0
  while i < len(array):
    pair = []
    pair1 = array[i]
    if i != len(array) - 1:
      pair2 = array[i + 1]
      pair = [pair2, pair1]
    else:
      pair = [pair1]
    for j in range(len(pair)):
      pairs.append(pair[j])
    i += 2
  print(pairs)
  return arrayToLinkedList(pairs)

class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

def toString(head):
  result = ''
  while head != None:
    result += str(head.val) + ' -> '
    head = head.next
  return result[0:len(result) - 4]

def linkedListToArray(head):
  result = []
  while head != None:
    result.append(head.val)
    head = head.next
  return result

def arrayToLinkedList(array):
  if len(array) == 0:
    return None
  head = ListNode(array[0], None)
  current = head
  for i in range(1, len(array)):
    current.next = ListNode(array[i], None)
    current = current.next
  return head


# TEST SUITE

# TEST 1

def test1():
  head = arrayToLinkedList([1,2,3,4])
  actual = str(linkedListToArray(swapPairs(head)))
  expected = str([2,1,4,3])
  if actual == expected:
    return "✔"
  else:
    return "X"

print(test1())

# TEST 2

def test2():
  head = arrayToLinkedList([1,2,3])
  actual = str(linkedListToArray(swapPairs(head)))
  expected = str([2,1,3])
  if actual == expected:
    return "✔"
  else:
    return "X"

print(test2())

# TEST 3

def test3():
  head = arrayToLinkedList([1])
  actual = str(linkedListToArray(swapPairs(head)))
  expected = str([1])
  if actual == expected:
    return "✔"
  else:
    return "X"

print(test3())

# TEST 4

def test4():
  head = arrayToLinkedList([0,7,2,6,6,8,0,3,4,5])
  actual = str(linkedListToArray(swapPairs(head)))
  expected = str([7,0,6,2,8,6,3,0,5,4])
  if actual == expected:
    return "✔"
  else:
    return "X"

print(test4())
