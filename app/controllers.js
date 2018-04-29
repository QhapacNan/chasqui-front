angular
  .module('myApp.controllers', [])
  .controller('dashboardController',
    function($rootScope, $scope, LocationsResource) {
      $scope.modalShown = false;

      $scope.createLocation = function() {
        LocationsResource.save({user_id: $scope.user.id});
      };

      $scope.showModal = function() {
        $scope.modalShown = true;
      };

      $scope.hideModal = function() {
        $scope.modalShown = false;
      };
  });
