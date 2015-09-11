'use strict';

/**
 * @ngdoc confirmBoxCtrl
 * @name gbApp
 * @description
 * # Controller for the confirm box
 */
angular.module('gbApp')
  .controller('confirmBoxCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
    	$modalInstance.close('Yes');
  	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
});