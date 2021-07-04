#!/bin/env/python

#https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def reverseList(self, head):
        cur, prev = head, None 
        while cur:
            cur.next, prev, cur = prev, cur, cur.next
        return prev

if __name__ == "__main__":
    a = ListNode(1)
    b = ListNode(2)
    c = ListNode(3)
    d = ListNode(4)
    f = ListNode(5)
    a.next = b
    b.next = c
    c.next = d
    d.next = f

    res = Solution().reverseList(a)
    print res.val