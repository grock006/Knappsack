var app = angular.module("knappApp",["ui.calendar"]);

app.controller("itineraryController",function($scope, $http){

    $scope.eventSources = ["Hello World"];

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'month basicWeek basicDay agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },
        dayClick: $scope.alertEventOnClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize
      }
    };



  $http.get('/api/itineraries/').success(function(data){
    $scope.results = data;
  });

     $scope.showCalendar = function(i){
     	  $http.get('/api/itineraries/' + i).success(function(data){
    	  $scope.calendar = data;
    	});
     };

    $scope.showEvents = function(i){
    	  $http.get('/api/itineraries/' + i).success(function(data){
    	  $scope.show = data;
    	});
    };


});

