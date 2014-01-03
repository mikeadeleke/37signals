$(document).ready(function() {
	$(".right1").hover(function() {
		$(this).prepend(<img src="img/arrow-right.png" />);
		$(this "h1:first-child").text("<span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$(this "p:first-child").text("");
	})

	$(".right2").hover(function() {
		$(this).prepend(<img src="img/arrow-right.png" />);
		$(this "h1:first-child").text("<span>Highrise</span>");
		$(this "p:first-child").text("");
	})

	$(".left").hover(function() {
		$(this).prepend(<img src="img/arrow-left.png" />);
		$(this "h1:first-child").text("<span>Campfire</span>");
		$(this "p:first-child").text("");
	})
})


