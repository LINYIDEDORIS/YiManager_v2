//JavaScriptDocument

$(document).ready(function(){
	
/*========================nav=========================*/
	 $(".menu").click(function(){ 
        $("nav").slideToggle();
    });
	
	$(window).on('load resize',function(){
        var a_w = document.body.clientWidth;
        if(a_w >= 768) $("nav").show(); else $("nav").hide();
    });	
	
	$("nav").load("nav.html");
	$("footer").load("footer.html");

/*========================section=========================*/
	var params = new URLSearchParams(window.location.search);
	var id = params.get("id");
	var aid = parseInt(id);
	
	switch (aid){
		
		case 0:
		$("section").load("s_main.html");
		break;
		
		case 1:
		$("section").load("s_feature.html");
		break;
		
		case 2:
		$("section").load("s_diy.html");
		break;
		
	}
		
	
	$("section").css({"display":"none"}).fadeIn(1000);
	
});