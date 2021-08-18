$(document).ready(function(){	

	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header")
		if(scrollDistance > 80){
			$header.addClass("header--colored");
		}
		else{
			$header.removeClass("header--colored");
		}
	})


	// wow plugin initialize
	new WOW().init();


	// stellar plugin initialize
	$(window).stellar();
})
