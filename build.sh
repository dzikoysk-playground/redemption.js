#!/bin/bash

echo 'Preparing a workplace...'
rm -rf ./dist/
wait

echo 'Creating ./dist/ directory...'
mkdir ./dist/
wait

echo 'Executing browserify.sh...'
bash ./browserify.sh
wait

echo 'Executing minify.sh...'
bash ./minify.sh
wait

echo 'Redemption.js is located in the ./dist/ directory.'