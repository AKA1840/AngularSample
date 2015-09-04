'use strict';

/**
 * @ngdoc editPageDirective
 * @name gbApp
 * @description
 * # slide in edit box 
 * 
 */
 angular.module('gbApp')
   .directive('editPage', function($timeout){
 	  var editPage = {};
 	  editPage.templateUrl = 'views/editPage.html';
 	  editPage.scope = {
 		close: '&',
 		fullDeduction: '=',
 		editItem: '='
 	  }
 	  editPage.link = function(scope, element, attrs){
 		$('body').append(element);
		scope.showContent = true;
		scope.hideContent = false;
		scope.newEditDeduction = {};
		
		for(var x in scope.editItem){
			scope.newEditDeduction[x] =  scope.editItem[x];
		}
			
		scope.cancel = function(){
			scope.hideContent = true;
			$timeout(function(){
				scope.close();	
			}, 1000);
		};
		scope.confirm = function(){
			scope.hideContent = true;
			var indexNewItem = scope.fullDeduction.indexOf(scope.editItem);
			for(var y in scope.newEditDeduction){
				scope.fullDeduction[indexNewItem][y] = scope.newEditDeduction[y];
			};
			$timeout(function(){
				scope.close();	
			}, 1000);
		};
 	  };
 	  return editPage;
 	});