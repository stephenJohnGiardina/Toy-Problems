# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
  def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
    current = head
    length = 1
    while current.next != None:
      length += 1
      current = current.next
    index = length - n
    if index == 0:
      return head.next
    current = head
    currentIndex = 1
    while current.next != None:
      if index == currentIndex:
        current.next = current.next.next
        break
      currentIndex += 1
      current = current.next
    return head

def toString(head):
  string = ''
  current = head
  while current != None:
    string += str(current.val) + ' -> '
    current = current.next

  return string[0:len(string) - 4]


# TEST SUITE

# TEST 1

node1 = ListNode(1)
node2 = ListNode(2)
node3 = ListNode(3)
node4 = ListNode(4)
node5 = ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


print(toString(Solution.removeNthFromEnd(node1, node1, 2)))
