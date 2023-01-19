(function($){
	"use strict";
	$(document).on("ready", function(){
	 
		var singlePageNavBar = $('.navbar');
		singlePageNavBar.singlePageNav({
	        offset: 50,                 
	        currentClass: 'current',    
	        currentThreshold: 500,      
	        duration: 500,              
	        effect: 'swing'
	    });
    }); 

})(jQuery);
