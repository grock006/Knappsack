
app.controller("searchController",function($scope, SearchResource){

 $scope.queryBusiness = function(limit, keyword, location, category){
  var limit_value = parseInt(limit);

    var settings = SearchResource( limit_value , keyword, location, category);
    var coord = $scope.results;
    $scope.results = settings.search(); 

   $scope.results.$promise.then(function(data) {
    $scope.markers = []
    for (i = 0 ; i < data.businesses.length; i++){
      $scope.markers.push({
          id: i,
          coords: {
                latitude:  data.businesses[i].location.coordinate.latitude
                , 
                longitude: data.businesses [i].location.coordinate.longitude
          }
      });
    }
  
      $scope.marker = { id: 0, coords: {latitude:  34.052234,longitude: -118.243685} }; 
      $scope.map = { center: { latitude: 34.052234, longitude: -118.243685}, zoom: 8 };
     });


  
 };


}); // End of Controller Function

