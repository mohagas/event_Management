eventApp.factory("eventData",function(Event){
return {
  getEvents : function(){
    return Event.query();
  },
  addEvent : function(event) {
    event.$save();
  },
  updateEvent: function(event){
      event.$save();
    return Event.query();
   },

}

})
