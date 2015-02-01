
app.controller("searchController",function($scope, MyYelpAPI){

  function randomString(length, chars) {
    var result = '';
       for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
  }

  $scope.businesses = [];
  MyYelpAPI.retrieveYelp('', function(data) {
      $scope.businesses = data.businesses;
  });


 // $scope.randomString = function(length, chars){
 //    var result = '';
 //    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
 //    return result;  

 



});