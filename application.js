$(document).ready(function() {
	
	// Happy * insert day * 
	var today = new Date();
	var weekdays = new Array("Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday");
	var day = weekdays[today.getDay()];
	$('#day').append("Happy "+day+".");
	// End of happy * insert day *

	$(".box1").hover(function() {
		$(".main-event").toggleClass("hidden");
		$(".basecamp").toggleClass("hidden");
		$(".arrow1").toggleClass("hidden");
	});

	$(".box2").hover(function() {
		$(".main-event").toggleClass("hidden");
		$(".highrise").toggleClass("hidden");
		$(".arrow2").toggleClass("hidden");
	});
	
	$(".box3").hover(function() {
		$(".main-event").toggleClass("hidden");
		$(".campfire").toggleClass("hidden");
		$(".arrow3").toggleClass("hidden");
	});
});

/*--- Day of the Week Animation Section ---*/
	