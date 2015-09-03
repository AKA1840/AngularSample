'use strict';

angular.module('gbApp')
	.directive('frameOne', function(){
		var frameOne = {};
		frameOne.templateUrl = 'views/frameOne.html';
		frameOne.scope = {
			close: '&'
		};
		frameOne.link = function(scope, element, attrs){	
			$('body').append(element);
			scope.showContent = true;

			scope.cancel = function(){
				scope.close();
			}
			scope.confirm = function(){
				scope.bool = !scope.bool;
			}

			scope.colorboxes = [{name:"red"},{name:"orange"},{name:"yellow"},{name:"green"},{name:"lightblue"},{name:"blue"},{name:"purple"}];
		}




		return frameOne;
	});