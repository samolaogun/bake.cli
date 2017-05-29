#!/bin/bash

echo -n "Commit message: "

read message

git add .
git commit -m "$message"
git push -u origin master

npm version patch
npm publish

echo "Deployment complete."