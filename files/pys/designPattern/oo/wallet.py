#!/bin/env/python
import uuid, time
from decimal import Decimal

class Wallet(object):

    def __init__(self):
        self.__id = uuid.uuid1()
        self.__create_time = time.time()
        self.__balance = Decimal(0)
        self.__balance_last_modified_time = time.time()

    def get_id(self):
        return self.__id
    
    def get_create_time(self):
        return self.__create_time

    def get_balance_last_modified_time(self):
        return self.__balance_last_modified_time

    def increase_balance(self, amount):
        if Decimal(amount).compare(Decimal(0)) < 0 :
            raise Exception("Amount invalid!")
        self.__balance += Decimal(amount)
        self.__balance_last_modified_time = time.time()

    def decrease_balance(self, amount):
        if Decimal(amount).compare(Decimal(0)) < 0 :
            raise Exception("Amount invalid!")
        if Decimal(amount).compare(self.balance) > 0:
            raise Exception("Amount greater than balance!")
        self.__balance -= Decimal(amount)
        self.__balance_last_modified_time = time.time()
        
if __name__ == "__main__":
    w = Wallet()
    print(w.get_id())