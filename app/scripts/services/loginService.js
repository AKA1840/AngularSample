'use strict';

/**
 * @ngdoc loginService
 * @name gbApp
 * @description
 * # Login, Logout and check login 
 * 
 */
angular.module('gbApp')
	.factory('loginService',function($http, $state, sessionService) {
		return{
			login: function(data, scope){
				$http.post('/api/login', data)
				.then(function(response){
						sessionService.set('user',data.userName);
						$state.go('root.deduction');
					}, function(response){
						scope.msgtxt = 'incorrect information';  
						scope.user.password = '';
					}				   
				);
			},
			logout: function(){
				sessionService.destroy('user');
				$state.go('login');
			},
			islogged: function(){
				return !!sessionService.get('user');
			}
		};
	});