app.controller("searchController",function($scope, SearchResource){
 
    $scope.map = { center: { latitude: 0, longitude: 0}, zoom: 12 };

    var onSuccess = function(position){
      $scope.map.center = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      $scope.$apply();
    };

      function onError(error) {
          console.log('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);

 $scope.queryBusiness = function(limit, keyword, location, category){
  var limit_value = parseInt(limit);

    var settings = SearchResource( limit_value , keyword, location, category);

    $scope.results = settings.search(); 
    $scope.results.$promise.then(function(data) {
    $scope.businesses = data.businesses;
    $scope.markers = []
    for (i = 0 ; i < data.businesses.length; i++){
      $scope.markers.push({
          id: i,
          coords: {
                latitude:  data.businesses[i].location.coordinate.latitude
                , 
                longitude: data.businesses [i].location.coordinate.longitude
          },
          venue_name: data.businesses[i].name,
          image_url: data.businesses[i].image_url,
          category: data.businesses[i].categories[0][0], 
          rating_img_url_large: data.businesses[i].rating_img_url_large,
          address1: data.businesses[i].location.address[0],
          address2: data.businesses[i].location.address[1],
          address3: data.businesses[i].location.address[2],
          display_phone: data.businesses[i].display_phone,
          snippet_image_url: data.businesses[i].snippet_image_url,
          snippet_text: data.businesses[i].snippet_text,
          rating: data.businesses[i].rating,
          url: data.businesses[i].main_url
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

