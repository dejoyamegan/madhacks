/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
var rankingForMore;

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

	const getGenre = (name) => {
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results && results.length > 0) {
		return results[1];
	}
	return 0;
	}
	const genre = getGenre('genre');
	var filteredMovies = movies.filter(function (movie) { 	return movie.Genre === genre; });
	console.log(movies);
	var selectedRanking = getGenre('ranking');
	document.getElementById("yearId").innerHTML =  "Year Released: " + filteredMovies[parseInt(selectedRanking, 10) - 1].Year;
	document.getElementById("ratingId").innerHTML = "Movie Rated: " + filteredMovies[parseInt(selectedRanking, 10) - 1].Rating;
})(jQuery);

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results && results.length > 0) {
		return results[1];
	}
	return 0;
}

var selectedGenre;

function addToUrl() {
	//Returns the category selection
	var e = document.getElementById("demo-category");
	//Returns the movie genre that the user selected
	selectedGenre = e.options[e.selectedIndex].text;
	var url = "/results.html?genre=" + selectedGenre;
	window.location = url;
}

// A $( document ).ready() block.
$( document ).ready(function() {
	selectedGenre = $.urlParam('genre');
	var filteredMovies = movies.filter(function (movie) { 	return movie.Genre === selectedGenre; });
	document.getElementById("movie1").innerHTML = "MOVIE #1: " + filteredMovies[0].Title;
	document.getElementById("movie2").innerHTML = "MOVIE #2: " + filteredMovies[1].Title;
	document.getElementById("movie3").innerHTML = "MOVIE #3: " + filteredMovies[2].Title;

	document.getElementById("image1").setAttribute("src", "/images/" + filteredMovies[0].Image);
	document.getElementById("image2").setAttribute("src", "/images/" + filteredMovies[1].Image);
	document.getElementById("image3").setAttribute("src", "/images/" + filteredMovies[2].Image);

	document.getElementById("description1").innerHTML = filteredMovies[0].Description;
	document.getElementById("description2").innerHTML = filteredMovies[1].Description;
	document.getElementById("description3").innerHTML = filteredMovies[2].Description;

	console.log('hey');
});

var genreForMore;


function addToMore(j) {
	rankingForMore = j;
	genreForMore = $.urlParam('genre');
	const url = `/more.html?ranking=${j}`;
	window.location = url;
}

function yearAndRating() {
	var filteredMovies = movies.filter(function (movie) { 	return movie.Genre === genreForMore; });
	var selectedRanking = $.urlParam('ranking');
	var yearId = "year" + rankingForMore;
	var ratingId = "rating" + rankingForMore;
	document.getElementById(yearId).innerHTML =  "Year Released: " + filteredMovies[rankingForMore - 1].Year;
	document.getElementById(ratingId).innerHTML = "Movie Rated: " + filteredMovies[rankingForMore - 1].Rating;
}