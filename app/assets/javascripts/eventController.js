app.controller("eventController",function($scope, $resource, Event){
  
   $scope.opened = [] ;
   $scope.end_opened = [] ;

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

    $scope.open = function($event, num) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened[num] = true;
  };

    $scope.endOpen = function($event, num) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.end_opened[num] = true;
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

 $scope.createEvent = function(business, start_date, end_date, start_time, end_time, fullday) {

    var start_date_millisecond = start_date.getTime();
     var end_date_millisecond = end_date.getTime();

    console.log("Start Date Millisecond: " + start_date_millisecond);
    console.log("End Date Millisecond: " + end_date_millisecond);

    new Event(
      {
        name: business.name,
        date: '2015-02-25T05:05:06+07:00',
        start_time: '2015-02-25T05:05:06+07:00',
        end_time: '2015-02-25T05:05:06+07:00',
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
}); // End of Controller Function



