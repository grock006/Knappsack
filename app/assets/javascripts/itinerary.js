var app = angular.module("knappApp",[]);

app.controller("itineraryController",function($scope, $http){

	 $scope.name = "party"

  $http.get('/api/itineraries/').success(function(data){
    $scope.results = data;
  });

    $http.get('/api/itineraries/19').success(function(data){
    $scope.examples = data;
  });

     $http.get('/api/events').success(function(data){
    $scope.events = data;
  });

     $scope.showCalendar = function(i){
     	  $http.get('/api/itineraries/' + i).success(function(data){
    	  $scope.calendar = data;
    	});
     };

    // $scope.showResult = function(i){
    // 	  $http.get('/api/events/' + i).success(function(data){
    // 	  $scope.show = data;
    // 	});
    // };


});

