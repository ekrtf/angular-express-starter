#!/bin/env node

require('shelljs/global');

if (!which('browserify')) {
    echo('Sorry, this script requires browserify');
    echo('Run npm "install -g browserify" and try this script again.');
    exit(1);
}

// reset dist folder
rm('-rf', './dist');
mkdir('dist');

// copying stuff
cd('client');
exec('find . -name "*.html" | cpio -pdm ../dist');
cd('..');

// cleaning dist
cd('dist');
rm('-rf', 'node_modules');
cd('..');

// bundle up
exec('browserify client/index.js -o dist/bundle.js');
