#!/bin/env node

import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

import index from './routers/index';

const DIST_PATH = path.resolve(__dirname, '../dist');

function Server() {
    this.ipAddress = process.env.port || 'localhost';
    this.port = process.env.ip || '3000';
    this.server = express();
}

Server.prototype.setup = function() {
    this.server.use(morgan('combined'));
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(express.static(DIST_PATH));
};

Server.prototype.loadRoutes = function() {
    this.server.use('/', index);
};

Server.prototype.init = function() {
    this.setup();
    this.loadRoutes();
};

Server.prototype.start = function() {
    this.server.listen(this.port, this.ipAddress, () => {
        console.log(`Server running on ${ this.ipAddress }:${ this.port }`);
    });
};

var server = new Server();
server.init();
server.start();
