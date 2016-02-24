(function() {
    'use strict';

    angular.module('newApp')
        .config(appConfig);

    function appConfig($locationProvider, $urlRouterProvider, $stateProvider) {
        $locationProvider
            .html5Mode({enabled: true, requireBase: false})
            .hashPrefix('!');

        $urlRouterProvider
            .otherwise('main');

        $stateProvider
            .state('main', {
                url: '/main',
                templateUrl: 'views/main/main.html',
                controller: 'mainCtrl'
            });
    }
})();
