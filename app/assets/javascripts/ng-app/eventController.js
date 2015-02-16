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

/*  Collapse Flag*/
$scope.isCollapsed = true;

$scope.makeid = function()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

 $scope.createEvent = function(business, start_date, end_date, start_time, end_time, fullday) {

    $scope.addZero = function(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };

    $scope.convertDate = function(d) {
        var y = $scope.addZero(d.getFullYear());
        var m = $scope.addZero(d.getMonth());
        var d = $scope.addZero(d.getDate());
        var date = y + "-" + m + "-" + d + "T05:05:06+07:00";
        return date ;
    };

var test = $scope.convertDate(start_date)
console.log(test);

    $scope.convertTime = function(d) {
        var h = $scope.addZero(d.getHours());
        var m = $scope.addZero(d.getMinutes());
        var s = $scope.addZero(d.getSeconds());
        var time = h + ":" + m + ":" + s;
        return time ;
    };



    new Event(
      {
        title: business.name,
        start: "2015-02-17T05:05:06+07:00",
        end: "2015-02-17T05:05:06+07:00",
        begin_time: $scope.convertTime(start_time),
        stop_time: $scope.convertTime(end_time),
        description: business.snippet_text,
        main_url: business.url,
        rating: business.rating,
        itinerary_id: $scope.makeid(), //create random id for the event id
        location: business.location.display_address[0],
        category: business.categories[0][0],
        allDay: fullday
      }
    ).$save(function(data){
      console.log(data);
      // $state.go("allEvents")
    });
  } 
}); // End of Controller Functio



