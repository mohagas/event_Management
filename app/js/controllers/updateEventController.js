eventApp.controller("updateEventController",function($scope,eventData,Event){

   $scope.event = new Event();
   $scope.addEvent = function(event){
     console.log(event);
     event.likes = 0;
     event.dislikes = 0;
     eventData.addEvent(event);
   }


});
