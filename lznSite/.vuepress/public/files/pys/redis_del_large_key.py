#!/bin/env/python

import redis

class RedisDelLarge(object):
  def __init__(self,*args, **kwarg) -> None:
      super().__init__()
      self.red = redis.StrictRedis(*args, **kwarg)

  def del_large_hash(self, large_key, cursor = 0,match=None,count=1000):
      """ Delete Large Hash Key
      Args:
          large_key (string): large hash key
          cursor (int, optional):  cursor position. Defaults to 0.
          match (text, optional): allows for filtering the keys by pattern. Defaults to None.
          count (int, optional): allows for hint the minimum number of returns. Defaults to 1000.
      """          
      while cursor != 0:
        cursor, data = self.red.hscan(large_key,cursor,match, count)
        for item in data.items():
          self.red.hdel(large_key, item[0])

  def del_large_set(self, large_key, cursor=0,match=None,count=1000):
      """ Delete Large Set Key
      Args:
          large_key (string): large set key
          cursor (int, optional):  cursor position. Defaults to 0.
          match (text, optional): allows for filtering the keys by pattern. Defaults to None.
          count (int, optional): allows for hint the minimum number of returns. Defaults to 1000.
      """
      while cursor != 0:
        cursor, data = self.red.sscan(large_key, cursor,match, count)
        for item in data:
          self.red.srem(large_key, item)

  def del_large_list(self, large_key, start=0,end=1000):
      """ Delete Large List Key
      Args:
          large_key (string): large list key
          start (int, optional):  start position. Defaults to 0.
          end (int, optional): end position. Defaults to 1000.
      """
      while self.red.llen(large_key) > 0:
        self.red.ltrim(large_key, start, end)

  def del_large_sorted_set_key(self,large_key, min=0, max=1000):
      """ Delete Large Sorted set key
      Args:
          large_key (string): Large Sorted set key
          min (int, optional): smallest score. Defaults to 0.
          max (int, optional): largest score. Defaults to 1000.
      """
      while self.red.zcard(large_key) > 0:
        self.red.zremrangebyrank(large_key, min,max)

if __name__ == "__main__":
  pass