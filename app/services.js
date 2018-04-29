angular
  .module('myApp.services', [])
  .factory('UserResource', function($resource) {
    return $resource('/user/:id');
});
