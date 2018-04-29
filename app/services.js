const ApiPath =
  document
  .querySelector(['meta[name="action-cable-url"]'])
  .getAttribute('content')
  .match(/ws:\/\/(.*)\/cable/)[1];

angular
  .module('myApp.services', [])
  .factory('UsersResource', function($resource) {
    return $resource(`http://${ApiPath}/users/:id`,
      {
        id: '@id',
        activity_status: '@activity_status',
      },
      {
        update: {method: 'PATCH'},
      }
    );
  })
  .factory('UserLocationsResource', function($resource) {
    return $resource(`http://${ApiPath}/users/:user_id/locations/:id`, {
      user_id: '@user_id',
      id: '@id',
      latitude: '@latitude',
      longitude: '@longitude',
    });
  })
  .factory('LocationsResource', function($resource) {
    return $resource(`http://${ApiPath}/locations/:id`, {
      id: '@id',
    });
  });
