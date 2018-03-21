'use strict';

/**
 * @ngdoc overview
 * @name applicationApp
 * @description
 * # applicationApp
 *
 * Main module of the application.
 */
angular
  .module('applicationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/devis', {
        templateUrl: 'views/devis.html',
        controller: 'DevisCtrl',
        controllerAs: 'devis'
      })
      .when('/devis/add', {
        templateUrl: 'views/devis/add.html',
        controller: 'DevisAddCtrl',
        controllerAs: 'devis/add'
      })
      .when('/client', {
        templateUrl: 'views/client.html',
        controller: 'ClientCtrl',
        controllerAs: 'client'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
