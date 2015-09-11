'use strict';

/**
 * @ngdoc demoDataGenerator
 * @name gbApp
 * @description
 * # generate data for ng-table 
 * 
 */
angular.module('gbApp')
	.service('demoDataGenerator', function($http){
		  var template = {
      		"installationAt": "Philadelphia, PA",
      		"adminEmail": "Eric@gmail.com",
      		"poweredBy": "AKA",
      		"poweredByIcon": "/images/aka.gif"
    	};

    	this.generateData = function(number) {
    		var newArray = [];
    		for(var i=0; i<number; i++){
    			var newObj = {};
    			(function(i){
    				for(var  x in template) {
    					newObj[x] = template[x] + 4*i;
    				}
    				newArray.push(newObj);
    			})(i);
    		}
        	return newArray;
    	}; 
	});