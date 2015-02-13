var app = angular.module("knappApp",['ngResource', 'uiGmapgoogle-maps', "ui.calendar", "ui.bootstrap"]);

//configuration 
app.config(['$httpProvider',
    function ($httpProvider) {
      // send security token to rails with every angular http request
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);  // .config


//Itineraries Controller
app.controller("itineraryController",function($scope, $http, $resource){

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

    $scope.alertEventOnClick = function(data) {
            $scope.show = data
            console.log(data);
            $scope.showevent = true;
        };
 
 
        $scope.eventSources = {events: [
        {
            title: 'Event1',
            start: '2015-02-04'
        },
        {
            title: 'Event2',
            start: '2015-02-05'
        }
        // etc...
    ]}


  // $http.get('/api/events/').success(function(data){
  //         $scope.test = data;
  //         $scope.eventSources = [$scope.test];
  //       });    

    // var Test = $resource('api/events/:id', {id:'@id'});  
    // console.log(Test);
    // $scope.test = Test.query();  
    // $scope.eventSources = [$scope.test];


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
