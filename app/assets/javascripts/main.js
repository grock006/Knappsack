var app = angular.module("knappApp",["ui.calendar", "ui.bootstrap",'ngResource', 'uiGmapgoogle-maps']);

//configuration 
app.config(function($httpProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] =
        $('meta[name=csrf-token]').attr('content');
    })

// .config(['$httpProvider',
//     function ($httpProvider) {
//       // send security token to rails with every angular http request
//       $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
// }]);  // .config


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

        var Event = $resource('api/events/:id', {id:'@id'});
      $scope.events = Event.query(); 
      $scope.eventSources = [$scope.events];
 

    // var Test = $resource('api/itineraries/:id', {id:'@id'});  
    // $scope.test = Test.query();  
    //    console.log($scope.test);
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