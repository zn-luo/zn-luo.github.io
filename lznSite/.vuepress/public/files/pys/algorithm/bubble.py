#!/bin/env/python

class BubbleSort:
    def __init__(self):
        pass

    def sort(self, data=[2,6,4,1,5]):
        n = len(data)
        for i in range(1,n):
            for j in range(n-i):
                if  data[j] > data[j+1]: 
                    data[j], data[j+1] = data[j+1], data[j]
        return data

if __name__ =="__main__":
    print BubbleSort().sort()
