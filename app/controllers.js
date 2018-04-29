angular
  .module('myApp.controllers', [])
  .controller('dashboardController',
    function($scope, UserLocationsResource) {
      $scope.modalShown = false;
      $scope.newLatitude = -8.0991000;
      $scope.newLongitude = -79.0336000;

      $scope.createLocation = function() {
        UserLocationsResource.save({
          user_id: $scope.user.id,
          latitude: $scope.newLatitude,
          longitude: $scope.newLongitude,
        }).$promise.then(function() {
          $scope.hideModal();
        });
      };

      $scope.showModal = function() {
        $scope.modalShown = true;
      };

      $scope.hideModal = function() {
        $scope.modalShown = false;
      };
  })
  .controller('statusController',
    function($scope, $window, UsersResource) {
      $scope.modalShown = false;

      $scope.updateActivity = function(activityStatus) {
        UsersResource.update({
          id: $scope.user.id,
          activity_status: activityStatus,
        }).$promise.then(function() {
          $scope.hideModal();
          $window.location.reload();
        });
      };

      $scope.showModal = function() {
        $scope.modalShown = true;
      };

      $scope.hideModal = function() {
        $scope.modalShown = false;
      };

      $scope.buttonText = function() {
        return $scope.user.activity_status === 'active' ? 'Activo' : 'Inactivo';
      }
      $scope.buttonClass = function() {
        return $scope.user.activity_status === 'active' ? 'success' : 'warning';
      }
  });
