'use strict';

/**
 * @ngdoc frameOne Directive
 * @name gbApp
 * @description
 * # slide in add box 
 * 
 */
angular.module('gbApp')
	.directive('frameOne', function($timeout){
		var frameOne = {};
		frameOne.templateUrl = 'views/frameOne.html';
		frameOne.scope = {
			close: '&',
			fullDeduction: '='
		};
		frameOne.link = function(scope, element, attrs){	
			$('body').append(element);
			scope.showContent = true;
			scope.hideContent = false;
			scope.cancel = function(){
				scope.hideContent = true;
				$timeout(function(){
					scope.close();
				}, 1000);
				
			}
			scope.confirm = function(){
				scope.hideContent = true;
				scope.fullDeduction.push(scope.newAddDeduction);
				$timeout(function(){
					scope.close();
				}, 1000);
			}

			scope.colorboxes = [{name:"red"},{name:"orange"},{name:"yellow"},{name:"green"},{name:"lightblue"},{name:"blue"},{name:"purple"}];
		}

		return frameOne;
	});