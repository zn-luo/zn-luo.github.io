#!/bin/python

from datetime import datetime
import time

def cache(t):
    ca_data = {}
    def wrap_outside(func):
        def wrap_cache(keyswords):   
            def call_f(func,keyswords):
                res = func(keyswords)    
                ca_data[keyswords] = {"res":res, "fist_query_time":datetime.now().second}
                return res       
            if keyswords in ca_data:                
                now_time = datetime.now().second - ca_data[keyswords]["fist_query_time"]
                if now_time < t:
                    print("cache in   10s")
                    return ca_data[keyswords]["res"]
                else:
                    print("cache gt  10s")
                    del ca_data[keyswords]
                    return call_f(func,keyswords)
            else:                
                return call_f(func,keyswords)
        return wrap_cache
    return wrap_outside

def get_news(keyswords):
    print("query db get keyswords data")
    return {keyswords: "data for keywords"}

@cache(10)
def query(keyswords):
    news = get_news(keyswords)
    return news



if __name__ =="__main__":
    print query("query")
    print query("query")
    time.sleep(13)
    print query("query")