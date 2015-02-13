app.controller("eventController",function($scope, $resource, Event){

  $scope.test = function() {
    console.log("hello");

  }; 
 $scope.createEvent = function() {
    new Event(
      {
        name: "Jazz Festival",
        date: "2015-02-25T05:05:06+07:00",
        start_time: "2015-02-25T05:05:06+07:00",
        end_time: "2015-02-24T06:05:06+07:00",
        description: "Actually Austin bespoke viral, hashtag asymmetrical",
        main_url: "/test",
        rating: "6",
        itinerary_id: 20,
        location: "Pasadena",
        category: "music"
      }
    ).$save(function(data){
      console.log(data);
      // $state.go("allEvents")
    });
  } 
}); // End of Controller Functio



