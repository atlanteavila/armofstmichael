'use strict';

angular.module('armOfStMichaelApp', ['armOfStMichaelApp.auth', 'armOfStMichaelApp.admin',
    'armOfStMichaelApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
