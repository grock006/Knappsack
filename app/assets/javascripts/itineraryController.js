angular.module("knappApp",["ui.calendar", "ngResource", "ui.bootstrap"])
    .config(function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] =
        $('meta[name=csrf-token]').attr('content');
    })
    .controller("itineraryController", itineraryController);

    
    function itineraryController($scope, $http, $resource){

      $http.get('/api/itineraries/').success(function(data){
        $scope.results = data;
        console.log(data)
      });

        $scope.showEvents = function(i){
          $http.get('/api/itineraries/' + i).success(function(data){
          $scope.show = data;
        });
    };

     // $scope.showCalendar = function(i){
     // 	  $http.get('/api/itineraries/' + i).success(function(data){
    	//   $scope.eventSources = [data];
     //      console.log(i);
    	// });
     // };

    $scope.alertEventOnClick = function(data) {
            $scope.show = data
            console.log(data);
            $scope.showevent = true;
        }
 
    var Test = $resource('api/events/:id', {id:'@id'});  
    $scope.test = Test.query();  
    $scope.eventSources = [$scope.test];

    // $scope.eventSources = [];

    // $scope.eventSources = [$scope.events, $scope.eventSource];
    // var Test = $resource('api/itineraries/:id', {id:'@id'});  


    // $scope.showCalendar = function(i){
    //   // console.log(i)
    //   Test.get({id: i.id}, function(data) {
    //     // $scope.myCalendar.fullCalendar( 'refetchEvents' );
    //     $scope.eventSource = [data]

    //     // $('#calendar').fullCalendar( 'refetchEvents' )
    //   });
    //   // console.log(test.events)
    //   // $scope.eventSources = test.events
    //   // $scope.eventSources = [$scope.test];
    //   // console.log([$scope.test]);
    //   // console.log($scope.eventSources);
    // }




    // $scope.setEventSource = function(locationId) {
    //     // remove the event source.
    //     uiCalendarConfig.calendars['myCalendar'].fullCalendar('removeEventSource', $scope.eventSource);
    //     // Create the new event source url
    //     $scope.eventSource = {url : "/api/itineraries/" + locationId};
    //     // add the new event source.
    //     uiCalendarConfig.calendars['myCalendar'].fullCalendar('addEventSource', $scope.eventSource);
    //     console.log(locationId);
    //     }


    

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



    // var Event = $resource('api/events/:id', {id:'@id'});
    // $scope.events = Event.query(); 
    // $scope.eventSources = [$scope.events];

  //    $scope.eventSources = [];
  //    $scope.showCalendar = function(i){
  //   console.log(i);
  //   var Test = $resource('api/itineraries/:id', {id:'@id'});  
  //   $scope.test = Test.get({id: i}); 
  //   $scope.eventSources = [$scope.test];
  // }