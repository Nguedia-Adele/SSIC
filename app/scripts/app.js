'use strict';

/**
 * @ngdoc overview
 * @name ssicRApp
 * @description
 * # ssicRApp
 *
 * Main module of the application.
 */
angular
  .module('ssicRApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('/', {
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      $urlRouterProvider.otherwise('/home');
  });
