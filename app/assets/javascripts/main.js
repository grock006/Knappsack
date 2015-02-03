  $(document).ready(function(){
    $('.datepicker').datepicker({
    	 orientation: "top right",
    	todayHighlight: true,
    	autoclose: true
    });

    var datepicker = $.fn.datepicker.noConflict(); // return $.fn.datepicker to previously assigned value
	$.fn.bootstrapDP = datepicker;

  });

