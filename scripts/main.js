
// My attempt to use a callback function failed. 
// I'm going to have to bug you guys to assist.
// I tried to call both of the following in my #shiftButton.click method below.

// var anon_func = function(){ console.log("Did a thing...anonymously");}

// function testFunction(){
// 	console.log("This is a test. It is only a test.");
// }


// Wasn't sure how to test for a css state so I created boolean to toggle.
var buttonToggle = false;
var para1_isHidden = false;
var para2_isHidden = false;
var isOpaque = false;


// $(document).ready()
// this section will run once the page is loaded to completion

$(function() {
	
	$("#MrEicon").hide().fadeIn(2000);

	// Was toying with attempting a flickering effect.
	// Couldnt get to work with show/hide and didnt like outcome with fade.
	// Also had a hard time getting .delay to work.

	//$("#MrEicon").show(x);
	// var x = 500;
	// while(x > 0) {
	// 	$("#MrEicon").fadeIn(50).delay(0 + x).fadeOut(50).delay(500 - x);

	// 	x -= 50;
	// 	console.log(x);
	// }
	//$(".twoColumnBox").hide();
	//$(".twoColumnBox").fadeIn(2000);

	$("#shiftButton").click(
		function(){
			if (buttonToggle === false) {
				$("#shiftButton").css("float", "right");
				$("#shiftButton").html("Right Button");
				buttonToggle = true;
			} else {
				$("#shiftButton").css("float", "left");
				$("#shiftButton").html("Left Button");
				buttonToggle = false;
			}
		}
	);

	// Slide para away when clicked. 
	// I couldn't figure out how to write this so I don't have to dupe
	// this code for every paragraph

	$("#p1Button").click( function(){
		if (para1_isHidden === false) {
			$("#para1").slideUp(1000);
			$("#p1Button").html("Expand");
			para1_isHidden = true;
		} else {
			$("#para1").slideDown(1000)
			$("#p1Button").html("Minimize");
			para1_isHidden = false;
		};
	})

	$("#p2Button").click( function(){
		if (para2_isHidden === false) {
			$("#para2").slideUp(1000);
			$("#p2Button").html("Expand");
			para2_isHidden = true;
		} else {
			$("#para2").slideDown(1000)
			$("#p2Button").html("Minimize");
			para2_isHidden = false;
		};
	})

	// .animation example

	$("#opacityButton").click( function() {
		if (isOpaque === false) {
			$("#ownImage").animate( { opacity: 1.0 } , 2000 );
			$("#opacityButton").html("Hide");
			isOpaque = true;
		} else {
			$("#ownImage").animate( { opacity: 0.0 } , 2000);
			$("#opacityButton").html("Reveal");
			isOpaque = false;
		};
	})



})



