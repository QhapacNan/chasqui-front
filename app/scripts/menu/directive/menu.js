'use strict';

angular.module('Menu').directive('menu', function(){

 return {
  restrict: 'E',
  templateUrl: 'scripts/menu/views/menu.html',
  controller: 'MenuCtrl'
 };
});