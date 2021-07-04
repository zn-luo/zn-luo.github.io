#!/bin/env/python
# Create By lzn

import redis

class RedisDelLarge(object):
  def __init__(self,*args, **kwarg):
      self.red = redis.StrictRedis(*args, **kwarg)

  def del_key(self, cursor = None, match=None, num=1000):
      while cursor != 0:
        cursor, data = self.red.scan(cursor if cursor else 0, match,num)
        if data:
          self.red.delete(*data)

  def del_large_hash(self, large_key, cursor = None,match=None,count=1000):
      """ Delete Large Hash Key
      Args:
          large_key (string): large hash key
          cursor (int, optional):  cursor position. Defaults to 0.
          match (text, optional): allows for filtering the keys by pattern. Defaults to None.
          count (int, optional): allows for hint the minimum number of returns. Defaults to 1000.
      """          
      while cursor != 0:       
        cursor, data = self.red.hscan(large_key,cursor if cursor else 0,match, count)
        for item in data.items():
          self.red.hdel(large_key, item[0])

  def del_large_set(self, large_key, cursor=None,match=None,count=1000):
      """ Delete Large Set Key
      Args:
          large_key (string): large set key
          cursor (int, optional):  cursor position. Defaults to 0.
          match (text, optional): allows for filtering the keys by pattern. Defaults to None.
          count (int, optional): allows for hint the minimum number of returns. Defaults to 1000.
      """
      while cursor != 0:
        cursor, data = self.red.sscan(large_key, cursor if cursor else 0,match, count)
        for item in data:
          self.red.srem(large_key, item)

  def del_large_list(self, large_key, num=1000):
      """ Delete Large List Key
      Args:
          large_key (string): large list key
          num (int, optional): Quantity to delete. Defaults to 1000.
      """
      while self.red.llen(large_key) > 0:
        self.red.ltrim(large_key, num, -1)

  def del_large_sorted_set_key(self,large_key, num=1000):
      """ Delete Large Sorted set key
      Args:
          large_key (string): Large Sorted set key
          num (int, optional): Quantity to delete. Defaults to 1000.
      """
      while self.red.zcard(large_key) > 0:
        self.red.zremrangebyrank(large_key, 0, num-1)

if __name__ == "__main__":
  RedisDelLarge(host="localhost",port="6379").del_key(match="key:*",num=1000)