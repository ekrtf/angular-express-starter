#!/bin/env node

'use strict';

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import index from './routers/index';

const CLIENT_PATH = path.resolve(__dirname, '../client');

function Server() {
    this.ipAddress = 'localhost';
    this.port = '3000';
    this.server = express();
}

Server.prototype.setup = function() {
    this.server.use(morgan('combined'));
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(express.static(CLIENT_PATH));
};

Server.prototype.loadRoutes = function() {
    this.server.use('/', index);
};

Server.prototype.init = function() {
    this.setup();
    this.loadRoutes();
};

Server.prototype.start = function() {
    var self = this;

    self.server.listen(self.port, self.ipAddress, () => {
        console.log(`Server running on ${ self.ipAddress }:${ self.port }`);
    });
};

var server = new Server();
server.init();
server.start();
