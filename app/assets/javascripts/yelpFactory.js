app.factory("MyYelpAPI", function($http, $location) {
    return {
        "retrieveYelp": function(limit, callback) {
            var method = 'GET';
            var url = 'http://api.yelp.com/v2/search';
            $http.get(url).success(callback);
            }
        }
    });