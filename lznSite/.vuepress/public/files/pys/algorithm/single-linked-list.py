# -*-coding:UTF-8 -*-
#!/bin/env/python
# Created by lzn

import unittest
from inspect import isgenerator

class Node(object):
    def __init__(self,val):
        self.val = val
        self.next = None 

    def __eq__(self, node):
        return self.val == node.val


class SingleLinkList(object):
    def __init__(self):
        self.head = None 
    
    def is_empty(self):
        return self.head is None 

    def items(self):
        cur = self.head
        while not cur is None:
            yield cur   #返回生成器
            cur = cur.next   #游标后移

    def length(self):
        """链表长度"""
        cur,count = self.head, 0
        while not cur is None:
            count +=1 
            cur = cur.next   #游标后移
        return count

    def append(self, node):
        """尾部追加元素"""
        if self.is_empty(): #空链表,head指向新结点
            self.head = node 
        else:               #不是空链表则找出尾节点
            cur = self.head
            while cur.next is not None:
                cur = cur.next
            cur.next = node

    def prepend(self, node):
        """头部添加元素"""
        node.next = self.head   #新结点指针指向原头部结点
        self.head = node        #新结点设为head
        
    def insert(self, index, node):
        """指定位置插入元素"""
        if index == 0:
            self.prepend(node)
        elif index > self.length() -1:
            self.append(node)
        else:
            cur = self.head
            for _i in range(index-1):
                cur = cur.next
            node.next = cur.next
            cur.next = node

    def remove(self, node):
        """删除节点"""
        cur = self.head
        prev = None 
        while cur is not None:
            if cur == node: 
                if prev is None:
                    self.head = cur.next
                else:
                    prev.next = cur.next
                return True
            else:
                prev = cur
                cur = cur.next

    def find(self, node):
        """查找元素是否存在"""
        for n in self.items():
            if node == n:
                return True
        return False


class TestSingleLinkedList(unittest.TestCase):

    def _get_single_link(self):
        sl = SingleLinkList()
        for i in range(1,4):
            sl.append(Node(i))
        return sl

    def test_is_empty(self):
        self.assertTrue(SingleLinkList().is_empty())

    def test_items(self):
        singleLink = SingleLinkList()        
        self.assertTrue(isgenerator(singleLink.items())) 

    def test_length(self):
        sl = self._get_single_link()
        self.assertEqual(3, sl.length())
        self.assertEqual(0, SingleLinkList().length())

    def test_append(self):
        singleLink = SingleLinkList()
        node = Node(1)
        singleLink.append(node)
        self.assertEqual(singleLink.head, node)

    def test_prepend(self):
        sl = SingleLinkList()
        node1 = Node(1)
        node2 = Node(2)
        sl.append(node1)
        sl.prepend(node2)
        self.assertEqual(sl.head, node2)

    def test_insert(self):
        sl = self._get_single_link()
        sl.insert(2,Node(5))
        index = 0 
        for a in sl.items():            
            if index == 2:
                self.assertEqual(a.val, 5)
            index += 1

    def test_remove(self):
        sl = self._get_single_link()
        self.assertTrue(sl.remove(Node(2)))
        for n in sl.items():
            self.assertNotEqual(n.val,2)

    def test_find(self):
        sl = self._get_single_link()
        self.assertTrue(sl.find(Node(2)))

if __name__ == "__main__":
    unittest.main()

    # suite = unittest.TestSuite()
    # tests = [TestSingleLinkedList("test_length")]
    # suite.addTests(tests)
    # runner = unittest.TextTestRunner(verbosity=2)
    # runner.run(suite)