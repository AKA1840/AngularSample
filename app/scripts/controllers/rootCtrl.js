'use strict';

/**
 * @ngdoc rootCtrl
 * @name gbApp
 * @description
 * # Controller for the root page 
 */
angular.module('gbApp')
    .controller('rootCtrl', function($scope, loginService, sessionService) {
  		$scope.userName = sessionService.get('user');    
    	$scope.myDate = new Date();
		$scope.logout = function(){
    		loginService.logout();
    	};
  	});
