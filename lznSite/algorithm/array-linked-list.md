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

链表主要有单链表和双链表

### 单链表

#### 单链表的结构定义
1. python实现单链表结构如下所示，具体细节查看[single-linked-list.py](/imgs/pys/algorithm/single-linked-list.py)
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

