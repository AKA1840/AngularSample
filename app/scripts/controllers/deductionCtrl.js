'use strict';

/**
 * @ngdoc deductionCtrl
 * @name gbApp
 * @description
 * # Controller for the deduction page
 */
angular.module('gbApp')
  .controller('deductionCtrl', function($scope, $window, $http, $modal) {
  
        // initial data display mode to be "List"
        $scope.displayModel = "list";
        $scope.sorting = "deductionName"; 
        $scope.reverse = false;

        $scope.sortingBy = function(flag){
            $scope.sorting = flag;
            $scope.reverse = !$scope.reverse;
        }


        // Call api get deduction data
  	    $http.get('/api/deduction')
            .success(function(data) {
                $scope.deductions = data.deductions;
            })
            .error(function(data, status, headers, config) {
                console.log("Error with deduction api Call");
            });


        // Delete deduction node
        $scope.deleteDeduction = function (removeItem) {
            var modalInstance = $modal.open({
                templateUrl: 'views/confirmBox.html',
                controller: 'confirmBoxCtrl'
            });

            modalInstance.result.then(function (selectedItem) {
                $http.delete("/api/deduction/:id", {id:removeItem.id})
                    .success(function(res){
                        if(res.status == "success"){
                            $scope.deductions.splice($scope.deductions.indexOf(removeItem), 1);
                        }
                        else{
                            console.log("Delete failed!");
                        }
                    })
                    .error(function(res){
                        console.log("Delete Api failed");
                    });

            }, function () {
                console.log('No');
            });
        };

        // Edit box and add box
        $scope.addPageFlag = false;
        $scope.editPageFlag = false;

        $scope.openAddPage = function(){
            $scope.addPageFlag = true;
        };

        $scope.closeAddPage = function() {
            $scope.addPageFlag = false;
        };

        $scope.openEditPage = function(Item){
            $scope.editPageFlag = !$scope.editPageFlag;
            $scope.editPageContent = Item;
        };

        $scope.closeEditPage = function(){
            $scope.editPageFlag = false;
        };

  });
