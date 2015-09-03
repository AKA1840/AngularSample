'use strict';

/**
 * @ngdoc loginCtrl
 * @name gbApp
 * @description
 * # Controller for the login page
 * 
 */
angular.module('gbApp')
	.controller('loginCtrl', function ($scope, loginService) {
    	$scope.msgtxt = '';
		$scope.login = function(data){
			loginService.login(data, $scope); 
		};
  	});
