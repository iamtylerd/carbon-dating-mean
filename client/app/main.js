'use strict'

 const app = angular.module('app', ['ngRoute'])

 app.config(($routeProvider, $locationProvider) => {
  $locationProvider.html5Mode(true)
  $locationProvider.hashPrefix = '/'
 	$routeProvider
 		.when('/', {
 			controller: 'LoginCtrl',
 			templateUrl: 'partials/main.html'
 		})
 		.when('/register', {
 			controller: 'RegisterCtrl',
 			templateUrl: 'partials/register.html'
 		})
 		.when('/profile', {
 			controller: 'ProfileCtrl',
 			templateUrl: 'partials/profile.html'
 		})
 		.when('/match', {
 			controller: 'MatchCtrl',
 			templateUrl: 'partials/match.html'
 		})
 })
