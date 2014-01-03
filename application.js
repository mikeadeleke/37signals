$(document).ready(function() {
	$(".right1").hover(function() {
		$(this).prepend('<img src="img/arrow-right.png" />');
		$(this).find("h1:first-child").text("<span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$(this).find("p:first-child").text("")
	});
	
	$(".right2").hover(function() {
		$(this).prepend('<img src="img/arrow-right.png" />');
		$(this).find("h1:first-child").text("<span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$(this).find("p:first-child").text("");
	});

	$(".left").hover(function() {
		$(this).prepend('<img src="img/arrow-left.png" />');
		$(this).find("h1:first-child").text("<span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$(this).find("p:first-child").text("");
	});
});

// proper way to show hover
$("#test").hover(function(){} , function(){});

// not sure what this was from...
<div id="headlines">
<div id="default" ></div><div id="item1" class="hidden"></div><div id="item2" class"hidden" ></div>