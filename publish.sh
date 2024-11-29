#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

touch .nojekyll

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/MikhailoSafronov/db-lab6.git master:gh-pages

cd -
