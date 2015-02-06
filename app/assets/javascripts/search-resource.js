app.factory("SearchResource", function($resource) {

  return function(limit_value){

  
  var Resource = $resource('/api/searches/:id', {id: '@id'},
                    {
                      search: {
                            method: 'GET',
                            url: '/api/searches/:id',
                            params:{limit: limit_value},
                            headers : {'Content-Type' : 'application/json'},
                          }
                    });

   return Resource;

 }
  });