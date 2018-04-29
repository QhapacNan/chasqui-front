// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngActionCable',
  'myApp.controllers',
  'myApp.services',
])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/dashboard', {
        templateUrl: 'dashboard/show.html',
        controller: 'dashboardController',
      })
      .when('/profile', {
        templateUrl: 'profile/show.html',
      })
      .when('/status', {
        templateUrl: 'status/show.html',
      })
      .when('/requests', {
        templateUrl: 'requests/index.html',
      })
      .when('/comments', {
        templateUrl: 'comments/index.html',
      })
      .otherwise({redirectTo: '/'});
    }
  )
  .run(function($rootScope, UsersResource, ActionCableChannel) {
    $rootScope.inputText = '';
    $rootScope.user = UsersResource.get({id: 1});
    $rootScope.myData = [];

    // connect to ActionCable
    const consumer = new ActionCableChannel('FeedChannel', {user_id: 1});
    const callback = function(message) {
      $rootScope.myData.push(message);
    };
    consumer.subscribe(callback).then(function() {
      $rootScope.sendToMyChannel = function(message) {
        consumer.send(message, 'send_a_message');
      };
      $rootScope.$on('$destroy', function() {
        consumer.unsubscribe().then(function() {
          $rootScope.sendToMyChannel = undefined;
        });
      });
    });
  });
