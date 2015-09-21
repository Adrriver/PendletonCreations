var screenRes;
var i = 0;
var images= ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img'5.jpg"];

$(window).ready(function() {	
	screenRes = $(window).height();
	if(screenRes >= 768) {
		$("#main-container").css({"height": screenRes});		
	} else {
		$("#main-container").css({"height": screen.availHeight});
	}
	adjHeight = screen.availHeight * .55;
	
	$('#animated-menu').css({"height":adjHeight});
	$('#animated-menu').css({"width":screen.availWidth});
	
	sectionSize = screen.availWidth;
	
	

	if((screen.availWidth <= 1280) && (screen.availWidth > 768)){
		$('.grid').css({"width":"85%"});
		console.log("reached");
	} else if(screen.availWidth <= 768) {
		$('.grid').css({"width":"85%"});
	} else {
		$('.grid').css({"width":"67%"});
		
	}


});

	

$(window).resize(function() {
	screenRes = $(this).height();
	
	if(($(window).width() <= 1280) && ($(window).width() > 1030)){
		$('.grid').css({"width":1000});
		console.log("reached");
	} else if($(window).width() <= 1030) {
		$('.grid').css({"width":"98%"});
		$('#animated-menu').css({"height": "calc(100% - 300)"});
	} else {
		$('.grid').css({"width":"1300px"});
		
	}


	
	
	if($(this).height() >= 768){
		$("#main-container").css({"height": screenRes});
	}
		$('#animated-menu').css({"width":$(window).width()});
		console.log($(window).width());
		
		$('animated-menu').css({"height":$(window).width() * .2});
	
	var width = $(window).width();
	
	
		
		
});

 setInterval(function(){
 	$('#animated-menu').animate({ opacity: '0' }, 400);
 	$('#animated-menu').css({"background-image":'url(' + images[i++] + ')'});
 	$('#animated-menu').animate({ opacity: '1' }, 500);
 	if(i % 5 == 0){
 		i = 0;
 	}
 }, 5000);

