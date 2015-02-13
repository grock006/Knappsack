var app = angular.module("knappApp",['ngResource', 'uiGmapgoogle-maps',"ui.bootstrap"]);

//configuration 
app.config(['$httpProvider',
    function ($httpProvider) {
      // send security token to rails with every angular http request
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);  // .config


//Itineraries Controller
app.controller("itineraryController",function($scope, $http){

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
