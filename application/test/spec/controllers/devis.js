'use strict';

describe('Controller: DevisCtrl', function () {

  // load the controller's module
  beforeEach(module('applicationApp'));

  var DevisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevisCtrl = $controller('DevisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DevisCtrl.awesomeThings.length).toBe(3);
  });
});
