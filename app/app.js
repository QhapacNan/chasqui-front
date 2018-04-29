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
        controller: 'statusController',
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
  .run(
    function($rootScope, UsersResource, LocationsResource, ActionCableChannel) {
      $rootScope.inputText = '';
      $rootScope.user = UsersResource.get({id: 1});
      $rootScope.locations = LocationsResource.query();

      // connect to ActionCable
      const consumer = new ActionCableChannel('LocationsChannel');
      const callback = function(location) {
        locationIndex =
          $rootScope.locations.findIndex((x) => x.user_id === location.user_id);

        if (locationIndex > -1) {
          $rootScope.locations[locationIndex] = location;
        }
      };

      consumer.subscribe(callback).then(function() {
        $rootScope.$on('$destroy', function() {
          consumer.unsubscribe();
        });
      });
    });
