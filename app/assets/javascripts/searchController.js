
app.controller("searchController",function($scope, SearchResource){


  // $scope.businesses = SearchResource.search(); 

 $scope.queryBusiness = function(limit){
    var settings = SearchResource(limit);
    $scope.results = settings.search();
 };


  
// $scope.businesses = []
// $scope.flag = false;

        // SearchResource.index().$promise.then(function(data) {     
        //               $scope.bus = data;
        //               // console.log("")
        //                 });





  // $scope.test1 = function() {
  //   console.log("TEST 1");

  //   MyYelpAPI.retrieveYelp(3, function(data) {
  //     $scope.businesses = data.businesses;
  //   });

  // };

  // $scope.test2 = function() {
  //   console.log("TEST 2");

  //   MyYelpAPI.retrieveYelp(7, function(data) {
  //     $scope.businesses_2 = data.businesses;
  //   });

  // };



  //   $scope.test3 = function() {

  //   MyYelpAPI.retrieveYelp(5, function(data) {
  //     $scope.businesses_3 = data.businesses;
  //   });

  //   };



  //   $scope.switch = function() {

  // if ($scope.flag == true){
  //   MyYelpAPI.retrieveYelp(3, function(data) {
  //     $scope.businesses = data.businesses;
  //     console.log("hello1");
  //   });
  // }else if ($scope.flag == false ){
  //   MyYelpAPI.retrieveYelp(6, function(data) {
  //      $scope.businesses = data.businesses;
  //      console.log("hello2");

  //   });
  // }






}); // End of Controller Function