#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f 'https://github.com/zzuccumi/vue_popol_0622.git master:gh-pages'
cd -