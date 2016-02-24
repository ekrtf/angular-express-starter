(function() {
    'use strict';

    var angular = require('angular');

    angular.module('newApp', [
        require('angular-ui-router')
    ]);

    require('./index.config');
    require('./index.controller');
    require('./views/main/main');
})();
