$(document).ready(function() {
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
