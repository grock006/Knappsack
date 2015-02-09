
app.controller("searchController",function($scope, SearchResource){

 $scope.queryBusiness = function(limit, keyword, location, category){
  var limit_value = parseInt(limit);
    console.log(category);
    console.log(keyword);

    var settings = SearchResource( limit_value , keyword, location, category);
    $scope.results = settings.search();
 };
   
   //Google Map
   $scope.map = { center: { latitude: 34.04948772763669, longitude: -118.2398127950728 }, zoom: 12 };

}); // End of Controller Function

