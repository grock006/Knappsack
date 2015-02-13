app.factory("Event", function($resource) {  
   return $resource('/api/events/:id', null,
                      {
                        'update': {method: 'PUT'}
                      })
           });
