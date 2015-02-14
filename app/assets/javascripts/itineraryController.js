angular.module("knappApp",["ui.calendar", "ngResource", "ui.bootstrap"])
    .config(function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] =
        $('meta[name=csrf-token]').attr('content');
    })
    .controller("itineraryController", itineraryController);
    
    function itineraryController($scope, $http, $resource){

      //Show all the User's Itineraries 
      $http.get('/api/itineraries/').success(function(data){
        $scope.results = data;
        console.log(data)
      });

    // Pulls all the user's events into the Calendar
    var Events = $resource('api/events/:id', {id:'@id'});  
    $scope.events = Event.query();  
    $scope.eventSources = [$events.test];

    // Click on events in calendar and events appear below Calendar
    $scope.alertEventOnClick = function(data) {
            $scope.show = data
            $scope.showevent = true;
        }
 
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


};