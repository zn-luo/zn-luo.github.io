#-*- coding: utf-8 -*-
#! /bin/env/python
# Created by lzn
import unittest
from inspect import isgenerator

class Node(object):
    def __init__(self, val):
        self.val = val
        self.prev = None 
        self.next = None 

class DoublyLinkedList(object):
    def __init__(self):
        self.head = None 
    
    def is_empty(self):
        return self.head is None 

    def items(self):
        cur = self.head
        while cur is not None:
            yield cur
            cur = cur.next
    
    def length(self):
        count = 0 
        for _i in self.items():
            count += 1
        return count

class TestDoublyLinkedList(unittest.TestCase):

    def test_is_empty(self):
        dll = DoublyLinkedList()
        self.assertTrue(dll.is_empty())

    def test_items(self):
        dll = DoublyLinkedList()
        self.assertTrue(isgenerator(dll.items()))

    def test_length(self):
        dll = DoublyLinkedList()
        self.assertEqual(0, dll.length())

if __name__ == "__main__":
    unittest.main()