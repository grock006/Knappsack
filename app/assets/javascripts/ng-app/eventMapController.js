app.controller("eventMapController",function($scope, $resource, Event){

  $scope.test = function(){console.log("hello")};
$scope.makeid = function()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

 $scope.createEvent = function(business) {
  console.log(business);

    new Event(
      {
        title: business.venue_name,
        start: "2015-02-22",
        start_time: "2015-02-25T05:05:06+07:00",
        end_time: "2015-02-24T06:05:06+07:00",
        description: business.snippet_text,
        main_url: business.url,
        rating: business.rating,
        itinerary_id: $scope.makeid(), //create random id for the event id
        location: business.address1,
        category: business.category
      }
    ).$save(function(data){
      console.log(data);
      // $state.go("allEvents")
    });
  };
}); // End of Controller Function



