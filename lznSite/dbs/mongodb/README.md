---
title: docker compose 使用swarm集群部署mongodb切片集群
date: 2020/8/5 17:40:00
comments: true
tags:
- 数据库
- database
---


利用docker swarm多节点自动部署mongoDB切片集群

## MongoDB切片集群高可用架构图

<https://www.processon.com/view/5cc56d70e4b059e20a0c038b>
![切片架构图](imgs/shard.jpg "切片架构图")