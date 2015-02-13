angular
  .module("knappApp")
  .factory('Event', EventFactory);

function EventFactory($resource) {
  return $resource('api/events/:id',
    {
      'update': { method: 'PUT' }
    }
  );
}