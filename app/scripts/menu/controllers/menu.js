'use strict';

angular.module('Menu').controller('MenuCtrl', ['$scope',
 function ($scope) {
  $scope.init = 0;
  $scope.openSidebar = function () {
   $('.sidebar').addClass('active');
   $('.overlay').addClass('active');
  };
  $scope.closeSidebar = function () {
   $('.sidebar').removeClass('active');
   $('.overlay').removeClass('active');
  };
 }
]);
