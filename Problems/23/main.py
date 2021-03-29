# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
def mergeKLists(lists):
  result = []
  for i in range(len(lists)):
    array = linkedListToArray(lists[i])
    for j in range(len(array)):
      result.append(array[j])
  return arrayToLinkedList(sorted(result))


class ListNode:
  def __init__(self, val=0, next=None):
    self.val = val
    self.next = next

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
  list1 = arrayToLinkedList([1, 4, 5])
  list2 = arrayToLinkedList([1, 3, 4])
  list3 = arrayToLinkedList([2, 6])
  lists = [list1, list2, list3]
  actual = linkedListToArray(mergeKLists(lists))
  expected = [1, 1, 2, 3, 4, 4, 5, 6]
  if actual == expected:
    return '$$$$$'
  else:
    return 'X'

print(test1())

# TEST 2

def test2():
  list1 = arrayToLinkedList([1])
  lists = [list1]
  actual = linkedListToArray(mergeKLists(lists))
  expected = [1]
  if actual == expected:
    return '$$$$$'
  else:
    return 'X'

print(test2())

# TEST 3

def test3():
  list1 = arrayToLinkedList([])
  list2 = arrayToLinkedList([-1, 5, 11])
  list3 = arrayToLinkedList([])
  list4 = arrayToLinkedList([6, 10])
  lists = [list1, list2, list3, list4]
  actual = linkedListToArray(mergeKLists(lists))
  expected = [-1,5,6,10,11]
  if actual == expected:
    return '$$$$$'
  else:
    return 'X'

print(test3())