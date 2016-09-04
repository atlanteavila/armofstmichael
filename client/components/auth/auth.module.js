'use strict';

angular.module('armOfStMichaelApp.auth', ['armOfStMichaelApp.constants', 'armOfStMichaelApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
