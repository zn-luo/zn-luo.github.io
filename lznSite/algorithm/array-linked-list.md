# 数组和链表

数组和链表是基础的数据结构，是一维数据结构。 

## 数组

数组是有序的元素序列集合，一般是内存里连续的存储区域。数组是在程序设计中，为了处理方便，把具有相同类型的若干元素按有序的形式组织起来的一种形式，这些**有序排列的同类数据元素的集合称为数组**。

### 操作时间复杂度

查找某个元素：O(1)
插入某个元素: 平均为O(n)
删除某个元素: 平均为O(n)

## 链表

链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。

链表主要有单链表、双链表和循环链表。

### 单链表

链表数据节点的指针指向下一个节点，最后一个节点的指针为空，按序链接起来的链式存取结构则为单链表。

#### 单链表的结构定义
1. 如下所示python实现单链表结构，具体细节查看[single-linked-list.py](/imgs/pys/algorithm/single-linked-list.py)
    ```python
    class Node(object):
        """单链表结点结构"""
        def __init__(self, val):
            self.val = val
            self.next = None
    class SingleLinkedList(object):
        """单链表"""
        self.head = None
    if __name__=="__main__":
        linkedList = SingleLinkedList() #实例化链表
        node1 = Node(1)
        node2 = Node(2)
        linkedList.head = node1
        node1.next = node2
    ```

### 双链表

双链表也是链表的一种，它的每个数据节点有两个指针，分别指向后续和前驱。

1. 如下所示python实现双向链表，具体细节查看[doubly-linked-list.py](/imgs/pys/algorithm/doubly-linked-list.py)
    ```python
    class Node(object):
        """双链表结点结构"""
        def __init__(self, val):
            self.val = val
            self.prev = None
            self.next = None
    class DoublyLinkedList(object):
        """双链表"""
        self.head = None
    if __name__=="__main__":
        linkedList = DoublyLinkedList() #实例化链表
        node1 = Node(1)
        node2 = Node(2)
        linkedList.head = node1
        node1.next = node2
        node2.prev = node1
    ```
