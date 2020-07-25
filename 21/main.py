# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        l1 = linkedListToArray(l1)
        l2 = linkedListToArray(l2)
        for i in range(len(l2)):
            l1.append(l2[i])
        return arrayToLinkedList(sorted(l1))

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
  node1 = ListNode(1)
  node2 = ListNode(2)
  node3 = ListNode(4)
  node4 = ListNode(1)
  node5 = ListNode(3)
  node6 = ListNode(4)
  node1.next = node2
  node2.next = node3
  node4.next = node5
  node5.next = node6
  return Solution.mergeTwoLists(None, node1, node4)

print(toString(test1()))