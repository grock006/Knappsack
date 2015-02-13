app.controller("eventController",function($scope, $resource, Event){
$scope.makeid = function()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

 $scope.createEvent = function(business) {

    new Event(
      {
        name: business.name,
        date: "2015-02-25T05:05:06+07:00",
        start_time: "2015-02-25T05:05:06+07:00",
        end_time: "2015-02-24T06:05:06+07:00",
        description: business.snippet_text,
        main_url: business.url,
        rating: business.rating,
        itinerary_id: $scope.makeid(), //create random id for the event id
        location: business.location.display_address[0],
        category: business.categories[0][0]
      }
    ).$save(function(data){
      console.log(data);
      // $state.go("allEvents")
    });
  } 
}); // End of Controller Functio



