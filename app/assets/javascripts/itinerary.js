var app = angular.module("knappApp",[]);

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
