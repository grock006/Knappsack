var app = angular.module("knappApp",['ngResource', 'uiGmapgoogle-maps',"ui.bootstrap", "ui.calendar"]);

//configuration 
app.config(['$httpProvider',
    function ($httpProvider) {
      // send security token to rails with every angular http request
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);  // .config

