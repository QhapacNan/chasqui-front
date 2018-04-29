'use strict';
/* global google */

angular.module('Dashboard').controller('DashboardCtrl', ['$scope', 'UserLocationsResource', 'NgMap', 'MAP_STYLE_CONGIF', '$rootScope',
 function ($scope, UserLocationsResource, NgMap, MAP_STYLE_CONGIF, $rootScope) {

  $scope.styledMapType = MAP_STYLE_CONGIF.CONFIG;

  $scope.getCurrentPosition = function () {
   NgMap.getMap().then(function (map) {
    $scope.map = map;
    map.setOptions({styles: $scope.styledMapType});
    let options = {
     enableHighAccuracy: true
    };

    navigator.geolocation.getCurrentPosition(function (pos) {
      $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      console.log($scope.position);
      console.log(pos);
      console.log(JSON.stringify($scope.position));
     },
     function (error) {
      alert('Unable to get location: ' + error.message);
     }, options);
   });
  };
  $scope.modalShown = false;
  $scope.newLatitude = -8.0991000;
  $scope.newLongitude = -79.0336000;

  $scope.createLocation = function () {
   UserLocationsResource.save({
    user_id: $scope.user.id,
    latitude: $scope.newLatitude,
    longitude: $scope.newLongitude,
   }).$promise.then(function () {
    $scope.hideModal();
   });
  };

  $scope.showModal = function () {
   $scope.modalShown = true;
  };

  $scope.hideModal = function () {
   $scope.modalShown = false;
  };
  $scope.init = function () {
   console.log($rootScope.locations);
   $scope.getCurrentPosition();
  };

  $scope.init();
 }
]);
