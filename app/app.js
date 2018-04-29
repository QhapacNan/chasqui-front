// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngActionCable',
  'myApp.controllers',
  'myApp.services',
  'ngMap',
  'Dashboard',
  'Menu'
 ])
 .config(function ($locationProvider, $routeProvider) {
   $locationProvider.hashPrefix('!');

   var routes = [];

   routes.push({
    name: '/main',
    params: {
     templateUrl: 'scripts/main/views/main.html',
     controller: 'MainCtrl'
    }
   });
   routes.push({
    name: '/dashboard',
    params: {
     templateUrl: 'scripts/dashboard/views/dashboard.html',
     controller: 'DashboardCtrl'
    }
   });

   routes.push({
    name: '/status',
    params: {
     templateUrl: 'status/show.html',
     controller: 'statusController'
    }
   });

   routes.push({
    name: '/requests',
    params: {
     templateUrl: 'requests/index.html'
    }
   });

   routes.push({
    name: '/profile',
    params: {
     templateUrl: 'profile/show.html'
    }
   });

   routes.push({
    name: '/comments',
    params: {
     templateUrl: 'comments/index.html'
    }
   });


   routes.forEach(function (route) {
    $routeProvider.when(route.name, route.params);
   });

   $routeProvider.otherwise({redirectTo: '/'});
  }
 )
 .run(
  function ($rootScope, UsersResource, LocationsResource, ActionCableChannel) {
   $rootScope.inputText = '';
   $rootScope.user = UsersResource.get({id: 1});
   $rootScope.locations = LocationsResource.query();

   // connect to ActionCable
   const consumer = new ActionCableChannel('LocationsChannel');
   const callback = function (location) {
    let locationIndex = $rootScope.locations.findIndex((x) => x.user_id === location.user_id);

    if (locationIndex > -1) {
     $rootScope.locations[locationIndex] = location;
    }
   };

   consumer.subscribe(callback).then(function () {
    $rootScope.$on('$destroy', function () {
     consumer.unsubscribe();
    });
   });
  });
