#!/bin/bash

browserify -e src/Redemption.js -o dist/redemption.dev.js -s Redemption --node
