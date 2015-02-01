app.factory("MyYelpAPI", function($http) {

      function randomString(length, chars) {
    var result = '';
       for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
  }
                return {
                    "retrieveYelp": function(name, callback) {
                        var method = 'GET';
                        var url = 'http://api.yelp.com/v2/search';
                        var params = {
                                callback: 'angular.callbacks._0',
                                location: 'San+Francisc',
                                oauth_consumer_key: 'ESlz921hij6-PRs8ZiV1kA', //Consumer Key
                                oauth_token: 'KXhADDeDjbhuA7Up2x-uv4CKA4YYtsvb', //Token
                                oauth_signature_method: "HMAC-SHA1",
                                oauth_timestamp: new Date().getTime(),
                                oauth_nonce: randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
                                term: 'food'
                            };
                        var consumerSecret = 'S6O1af3CNeH5_eD4PpT9gWwtmo4'; //Consumer Secret
                        var tokenSecret = 'Yq8chwYEexx5DWEPTAM98Ck3pU4'; //Token Secret
                        var signature = oauthSignature.generate(method, url, params, consumerSecret, tokenSecret, { encodeSignature: false});
                        params['oauth_signature'] = signature;
                        $http.jsonp(url, {params: params}).success(callback);
                    }
                }
            });