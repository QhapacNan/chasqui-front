angular
 .module('myApp.controllers', [])
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
   };

   $scope.buttonClass = function() {
    return $scope.user.activity_status === 'active' ? 'success' : 'warning';
   };
  })
 .controller('requestsNewController',
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
   };

   $scope.buttonClass = function() {
    return $scope.user.activity_status === 'active' ? 'success' : 'warning';
   };
  });
