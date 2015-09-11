'use strict';

describe('Controller: loginCtrl', function () {

  // load the controller's module
  beforeEach(module('gbApp'));

  var loginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    loginCtrl = $controller('loginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of varibales to the scope', function () {
    
  });
});
