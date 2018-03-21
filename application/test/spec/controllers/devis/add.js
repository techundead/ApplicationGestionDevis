'use strict';

describe('Controller: DevisAddCtrl', function () {

  // load the controller's module
  beforeEach(module('applicationApp'));

  var DevisAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevisAddCtrl = $controller('DevisAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DevisAddCtrl.awesomeThings.length).toBe(3);
  });
});
