#!/bin/bash

grep "$(date +'%Y-%m-%d %H:%M')" -C 3  review_site/logs/replication_log