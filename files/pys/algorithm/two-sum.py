#!/bin/env/python

# https://leetcode-cn.com/problems/two-sum/
class Solution:
    def twoSum(self, nums, target):
        hashM= dict()
        for i,v in enumerate(nums):
            if target - v in hashM:
                return [i, hashM[target-v]]
            hashM[v] = i

if __name__ == "__main__":
    print(Solution().twoSum([2,7,11,15],9))