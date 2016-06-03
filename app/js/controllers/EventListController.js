eventApp.controller("eventController", function($scope, eventData){
  $scope.events = eventData.getEvents();
  $scope.upVote = function(event) {
    event.likes++;
    eventData.updateEvent(event);

  };
  $scope.downVote = function(event){
    event.dislikes++;
    eventData.updateEvent(event);


  };

});
