
app.controller("searchController",function($scope, SearchResource){

 $scope.queryBusiness = function(limit, keyword, location, category){
  var limit_value = parseInt(limit);
    console.log(category);
    console.log(keyword);

    var settings = SearchResource( limit_value , keyword, location, category);
    $scope.results = settings.search();
 };


}); // End of Controller Function