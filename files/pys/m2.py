#!/bin/python

class Solution:
    def __init__(self):
        self.res = []

    def combine(self,d=[1,2,4,3,9,5,6,12,15]):
        for j in range(len(d)):
            self.res.append(self.tmp_d(d[:0-j]))
        return self.res

    def tmp_d(self, d):
        tmp = []
        for a in d:
            if len(tmp) == 0:
                tmp.append(a)
            elif tmp[-1] < a:
                tmp.append(a)
        return tmp
    

if __name__ == "__main__":
    print Solution().combine()