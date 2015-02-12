  $(document).ready(function(){
    $('.datepicker').datepicker({
    	 orientation: "top right",
    	todayHighlight: true,
    	autoclose: true
    });

    var datepicker = $.fn.datepicker.noConflict(); // return $.fn.datepicker to previously assigned value
	$.fn.bootstrapDP = datepicker;

  });

var app = angular.module("myApp",['ngResource', 'uiGmapgoogle-maps']);

//configuration 
app.config(['$httpProvider',
    function ($httpProvider) {
      // send security token to rails with every angular http request
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);  // .config
