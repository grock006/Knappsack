
app.controller("searchController",function($scope, SearchResource){

 $scope.queryBusiness = function(limit, keyword, location, category){
  var limit_value = parseInt(limit);

    var settings = SearchResource( limit_value , keyword, location, category);
    var coord = $scope.results;
    $scope.results = settings.search(); 

   $scope.results.$promise.then(function(data) {
     $scope.venue = data.businesses[0];    
      $scope.latitude = $scope.venue.location.coordinate.latitude;
      $scope.longitude = $scope.venue.location.coordinate.longitude ;
  
      $scope.marker = {

      id: 0,

      coords: {
                latitude:  $scope.latitude 
                , 
                longitude: $scope.longitude
              }
      }; 

      $scope.map = { center: { latitude: $scope.latitude , longitude: $scope.longitude }, zoom: 12 };
     });


  
 };


}); // End of Controller Function

