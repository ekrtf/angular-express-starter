#!/bin/env node

'use strict';

require('babel-core/register');

var Server = require('./server.js');
var instance = new Server();
instance.init();
instance.start();
