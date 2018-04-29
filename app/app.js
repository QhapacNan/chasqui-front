'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngActionCable'
 ])
 .config(['$locationProvider', '$routeProvider',
  function ($locationProvider, $routeProvider) {
   $locationProvider.hashPrefix('!');

   $routeProvider.otherwise({redirectTo: '/view1'});

  }])
 .run(function ($rootScope, ActionCableChannel) {

  $rootScope.inputText = "";
  $rootScope.myData = [];

  // connect to ActionCable
  var consumer = new ActionCableChannel("FeedChannel", {user_id: 1});
  var callback = function (message) {
   debugger;
   $rootScope.myData.push(message);
  };
  consumer.subscribe(callback).then(function () {
   $rootScope.sendToMyChannel = function (message) {
    consumer.send(message, 'send_a_message');
   };
   $rootScope.$on("$destroy", function () {
    consumer.unsubscribe().then(function () {
     $rootScope.sendToMyChannel = undefined;
    });
   });
  });
 });
