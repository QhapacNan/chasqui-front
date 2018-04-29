const ApiPath =
  document
  .querySelector(['meta[name="action-cable-url"]'])
  .getAttribute('content')
  .match(/ws:\/\/(.*)\/cable/)[1];

angular
  .module('myApp.services', []);

angular
  .module('myApp.services')
  .factory('UsersResource', function($resource) {
    return $resource(`http://${ApiPath}/users/:id`);
  });

angular
  .module('myApp.services')
  .factory('LocationsResource', function($resource) {
    return $resource(`http://${ApiPath}/users/:user_id/locations/:id`, {
      user_id: '@user_id',
      id: '@id',
      latitude: '@latitude',
      longitude: '@longitude',
    });
  });
