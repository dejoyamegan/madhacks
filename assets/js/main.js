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


function getResults() {
	//Returns the category selection
	var e = document.getElementById("demo-category");
	//Returns the movie genre that the user selected
	var selectedGenre = e.options[e.selectedIndex].text;

	//Read local file
	const fs = require('fs');
	const papa = require('papaparse');
	const file = fs.createReadStream('movies.csv');
	var count = 0; // cache the running count
	papa.parse(file, {
		worker: true, // Don't bog down the main thread if its a big file
		step: function(result) {
			typeof result
		},
		complete: function(results, file) {
			console.log('parsing complete read', count, 'records.'); 
		}
	});
	var	movie1 = getMovie();
		$body = $('body');

}
