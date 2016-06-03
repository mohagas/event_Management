var eventApp = angular.module("eventApp", ['ngResource']);
eventApp.factory('Event', function($resource) {
  return $resource('http://localhost:3000/events/:id', { id: '@_id' });
});
