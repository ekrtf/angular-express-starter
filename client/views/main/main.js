(function() {
    'use strict';

    angular.module('newApp')
        .controller('mainCtrl', mainCtrl);

    function mainCtrl() {
        this.appName = 'New App';
    }

})();
