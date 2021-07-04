#-*-coding:UTF-8-*-
#!/bin/env/python

#https://leetcode-cn.com/problems/combinations/
class Solution:
    def __init__(self):
        self.res = []

    def combine(self, n, k):
        """https://leetcode-cn.com/problems/combinations/solution/hua-jie-suan-fa-77-zu-he-by-guanpengchn/
        """
        self.recursive_get_combine(n,k, 1 ,[])
        return self.res

    def recursive_get_combine(self,n,k,start, tmp_list):
        if k == 0 :
            self.res.append(tuple(tmp_list))
            return 

        for i in range(start, n-k+2):
            tmp_list.append(i)
            self.recursive_get_combine(n, k-1, i+1, tmp_list)
            tmp_list.pop()

##从数组里[6,5,8,4,3,6]随机取4个数，有多少种组合
class Solution1:
    def __init__(self):
        self.res = []
    
    def combine(self,data=[6,5,8,4,3,6],k=4):
        self.recursive_get_combine(data,k,0,[])
        return self.res
    
    def recursive_get_combine(self, data, k, start, tmp_list):
        if k==0:
            self.res.append(tuple(tmp_list))
            return
        for i in range(start, len(data)-k+1):
            tmp_list.append(data[i])
            self.recursive_get_combine(data, k-1, i+1, tmp_list)
            tmp_list.pop()


if __name__ == "__main__":
    print Solution().combine(4,3)
    print Solution1().combine()