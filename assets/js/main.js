/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

var csv = require('./jquery.csv.js');

function getResults() {
	//Returns the category selection
	var e = document.getElementById("demo-category");
	//Returns the movie genre that the user selected
	var selectedGenre = e.options[e.selectedIndex].text;

	

	//Read local file
	$.ajax({
		url: "pathto/filename.csv",
		async: false,
		success: function (csvd) {
			data = $.csv.toArrays(csvd);
			
		},
		dataType: "text",
		complete: function () {
			// call a function on complete 
		}
	});
	var	movie1 = getMovie();
		$body = $('body');

}

