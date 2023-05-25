#!/bin/bash

cd /home/ec2-user/deploy/home-helper/front
pm2 list
pm2 stop next-cicd
pm2 start npm --name home-helper -- start