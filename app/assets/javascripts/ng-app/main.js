angular
	.module("knappApp",["ui.calendar", "ui.bootstrap",'ngResource', 'uiGmapgoogle-maps', 'ui.router', 'templates']);

//configuration 
angular
  .module("knappApp")
    .config(function($httpProvider, $stateProvider, $urlRouterProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = 
      $('meta[name=csrf-token]').attr('content');
  
	// $stateProvider
 //       .state("newfood", {
 //        url: "/food/new",
 //        templateUrl: "food/new.html",
 //        controller: newFoodController
 //      })
 //      ;
  })