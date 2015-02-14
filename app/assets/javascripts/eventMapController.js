app.controller("eventMapController",function($scope, $resource, Event){


/*Install Date and Times*/
  $scope.today = function() {
    $scope.start_date = new Date();
    $scope.end_date = new Date();
  };
  $scope.today();

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

    $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

    $scope.endOpen = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.end_opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[3];


/*End Install Date and Dates*/

/*Times Method */

$scope.start_time = new Date();

  $scope.end_time = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };



  /*End Install*/





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
        name: business.venue_name,
        date: "2015-02-25T05:05:06+07:00",
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
}); // End of Controller Functio



