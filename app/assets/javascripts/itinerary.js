angular.module("knappApp",["ui.calendar", "ngResource", "ui.bootstrap"])
    .config(function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] =
        $('meta[name=csrf-token]').attr('content');
    })
    .controller("itineraryController", itineraryController);

    
    function itineraryController($scope, $http, $resource){

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

    //Grab the Itinerary id from the view, Itinerary ID is passed into the showCalendar function
    //showCalendar function(i) passes i where you find :id 
    //

    // var Event = $resource('api/events/:id', {id:'@id'});
    // $scope.events = Event.query(); 
    // $scope.eventSources = [$scope.events];

    $scope.alertEventOnClick = function(data) {
            $scope.show = data
            console.log(data);
            $scope.showevent = true;
        }


  //    $scope.eventSources = [];
  //    $scope.showCalendar = function(i){
  //   console.log(i);
  //   var Test = $resource('api/itineraries/:id', {id:'@id'});  
  //   $scope.test = Test.get({id: i}); 
  //   $scope.eventSources = [$scope.test];
  // }

 
    var Test = $resource('api/itineraries/:id', {id:'@id'});  
    $scope.test = Test.get({id: 20}); 
    $scope.eventSources = [$scope.test];
    

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

