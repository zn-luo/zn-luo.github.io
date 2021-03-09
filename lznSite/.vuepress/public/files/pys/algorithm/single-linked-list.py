# -*-coding:UTF-8 -*-
#!/bin/env/python

class Node(object):
    def __init__(self,val):
        self.val = val
        self.next = None 

class SingleLinkList(object):
    def __init__(self):
        self.head = None 
    
    def is_empty(self):
        return self.head is None 

    def insert(self, node):
        pass

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
        
    def remove(self, node):
        pass

    def find(self, node):
        pass