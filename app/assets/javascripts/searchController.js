app.controller("searchController",function($scope, SearchResource){

 $scope.queryBusiness = function(limit, keyword, location, category){
  var limit_value = parseInt(limit);

    var settings = SearchResource( limit_value , keyword, location, category);
    var coord = $scope.results;
    $scope.results = settings.search(); 

   $scope.results.$promise.then(function(data) {
    $scope.test = data;
    $scope.markers = []
    for (i = 0 ; i < data.businesses.length; i++){
      console.log("pushing to array");
      $scope.markers.push({
          id: i,
          coords: {
                latitude:  data.businesses[i].location.coordinate.latitude
                , 
                longitude: data.businesses [i].location.coordinate.longitude
          },
          venue_name: data.businesses[i].name
      });
    }
      var init_latitude = data.businesses[0].location.coordinate.latitude
      var init_longitude = data.businesses [0].location.coordinate.longitude
      $scope.map = { center: { latitude: init_latitude, longitude: init_longitude}, zoom: 12 };

        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };

     });


 };

}); // End of Controller Function

