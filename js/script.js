$(document).ready(function() {
	
	var colorValRand = function() {
        return Math.floor(Math.random() * 255);
    };
	
	// Uses vide plugin to load a random video
	// loads files with filename of bg0 through bg4
	//$('body').vide('video/bg1');
	
	// Initalize the variable
	var i = 0;
	
	// Create the array that contains the text
	var haiku = ["And why wander in these labyrinths?","Once more, for aesthetic reasons; because this present infinity,","these 'vertiginous symmetries,' have their tragic beauty."];

	// Print array values to console for reference
	console.log(haiku[0]);
	
	// Show the first value of the array
	$('#text').hide().html(haiku[0]).fadeIn(2000);
	
	// Select a button. Create function for click event
	$('#next').on('click', function() {
		i = (i+1) % haiku.length;
		console.log(haiku[i]);
		$('#text').addClass('primary-text').hide().html(haiku[i]).fadeIn(2000);
                
                // Generates random number from 0 - 4
                // A total of 5 values: 0,1,2,3,4
                var numRand = Math.floor(Math.random() * 5);
                //$('body').vide('video/bg' + numRand);
                
                console.log(colorValRand());
                $('.bg-gradient').css("background-image", "linear-gradient(45deg, rgb(" + colorValRand() + ", " + colorValRand() + ", " + colorValRand() + "), rgb(" + colorValRand() + ", " + colorValRand() + ", " + colorValRand() + ")");
	});
});
