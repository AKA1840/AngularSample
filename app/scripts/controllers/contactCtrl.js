'use strict';

/**
 * @ngdoc contactCtrl
 * @name gbApp
 * @description
 * # Controller for the contact page
 */
angular.module('gbApp')
    .controller('contactCtrl', function($scope, NgTableParams, demoDataGenerator){
    	$scope.tableParams = new NgTableParams({
      		page: 1, // show first page
      		count: 10 // count per page
    	}, {
      		filterDelay: 0,
      		data: demoDataGenerator.generateData(100)
    	});	
    	$scope.testParams = function(){
	    	console.log();
	    }

    });