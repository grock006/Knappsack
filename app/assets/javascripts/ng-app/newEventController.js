angular
  .module("knappApp")
  .controller("newEventController", newEventController);

function newEventController($scope, $http, $resource, $stateParams, $state, Event) {
  
  $scope.newEvent = function()  {
    console.log($scope.events.title)
    // new Event(
    //   console.log("Hello World 2")
    //   $scope.event.name
    // ).$save(function(data) {
    
    // });
  
  }
}