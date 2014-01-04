$(document).ready(function() {
	$(".box1").hover(function() {
		$(".main-event").toggleClass("hidden");
		$(".basecamp").toggleClass("hidden");
	});
	$(".box2").hover(function() {
		$(".main-event").toggleClass("hidden");
		$(".highrise").toggleClass("hidden");
	});
	$(".box3").hover(function() {
		$(".main-event").toggleClass("hidden");
		$(".campfire").toggleClass("hidden");
	});
});
