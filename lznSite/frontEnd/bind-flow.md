# 双向绑定和单向数据流

## 什么是双向绑定

model的更新会触发view的更新，view的更新会触发model的更新。

## 什么是单向数据流

model的更新会触发view的更新，view的更新与model没有关系

## vue的性质

1. vue是单向数据流，不是双向绑定
2. vue的双向绑定不过是语法糖
3. Object.defineProperty是用来做响应式更新的，各双向绑定没关系