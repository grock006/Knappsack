app.factory("SearchResource", function($resource) {

  return function(limit_value, keyword, location, category){

  
  var Resource = $resource('/api/searches/:id', {id: '@id'},
                    {
                      search: {
                            method: 'GET',
                            url: '/api/searches/:id',
                            params:{limit: limit_value, term: keyword, location: location, category: category},
                            headers : {'Content-Type' : 'application/json'},
                          } 
                    });

   return Resource;

 }
  });


