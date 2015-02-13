angular
  .module("knappApp")
  .controller("itineraryController",function($scope, $http, $resource){

    //Show all the User's Itineraries 
    $http.get('/api/itineraries/').success(function(data){
    $scope.results = data;
    });

    // Pulls all the user's events into the Calendar
    var Event = $resource('api/events/:id', {id:'@id'});
    $scope.events = Event.query(); 
    $scope.eventSources = [$scope.events];

    // Click on events in calendar and events appear below Calendar
    $scope.alertEventOnClick = function(data) {
            $scope.show = data
            console.log(data);
            $scope.showevent = true;
        };

    //Configuration for the Angular UI Calendar     
    $scope.uiConfig = {
      calendar:{
        height: 350,
        editable: false,
        timezone: false,
        header:{
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        eventClick: $scope.alertEventOnClick,   
        eventMouseover: $scope.alertEventOnMouseover,     
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        dayClick: $scope.alertDayOnClick
      }
    }

});
