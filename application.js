$(document).ready(function() {
	$(".products").hover(function() {
		$(".right1").prepend(<img src="arrow-right.png" />);
		$(".right1 h1:first-child").text("<span>Basecamp</span> is the project management tool you wish you had on your last project.");
		$(".right1 p:first-child").text("");
	})
})

$(document).ready(function() {
	$(".products").hover(function() {
		$(".right2").prepend(<img src="arrow-right.png" />);
		$(".right2 h1:first-child").text("<span>Highrise</span>");
		$(".right2 p:first-child").text("");
	})
})

$(document).ready(function() {
	$(".products").hover(function() {
		$(".left").prepend(<img src="arrow-left.png" />);
		$(".left h1:first-child").text("<span>Campfire</span>");
		$(".left p:first-child").text("");
	})
})

