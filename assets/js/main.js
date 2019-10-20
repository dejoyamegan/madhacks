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

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

function getMovieTitle(i) {
	var filteredMovies = getResults();
	return filteredMovies[i].Title;
}

function addToUrl() {
	//Returns the category selection
	var e = document.getElementById("demo-category");
	//Returns the movie genre that the user selected
	var selectedGenre = e.options[e.selectedIndex].text;

	var url = "/results.html?genre=" + selectedGenre;
	console.log(url);
	window.location = url;
}

// A $( document ).ready() block.
$( document ).ready(function() {
	var selectedGenre = $.urlParam('genre');
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
});

var lightboxPage = function(path) {
	// fetches content from a specified path and displays it in a lightbox
  
	var backdrop = document.createElement("div");
	var content = document.createElement("div");
  
	content.innerText = "Loading...";
  
	// use AJAX to load the content from the page
	var request = new XMLHttpRequest();
  
	request.open("GET", path, false);
  
	var handleAjaxEvent = function() {
	  // this function is called multiple times during the AJAX request.
	  // a state of 4 means that the request has completed.
	  if (request.readyState == 4) {
		  content.innerHTML = request.responseText;
	  }
	}
  
	request.onreadystatechange = handleAjaxEvent;
	request.send();
  
	backdrop.style.position = "fixed";
	backdrop.style.top = 0;
	backdrop.style.height = "100%";
	backdrop.style.left = 0;
	backdrop.style.width = "100%";
	backdrop.style.zIndex = 500;
	backdrop.style.background = "black";
	backdrop.style.opacity = 0.8;
  
	content.style.position = "fixed";
	content.style.top = "10%";
	content.style.height = "80%";
	content.style.left = "10%";
	content.style.width = "80%";
	content.style.zIndex = 600;
	content.style.border = "none";
	content.style.overflow = "auto";
	content.style.background = "white";
  
	document.body.appendChild(backdrop);
	document.body.appendChild(content);
  
	var removeLightbox = function() {
	  document.body.removeChild(backdrop);
	  document.body.removeChild(content);
	}
  
	// remove the lightbox when people click on the backdrop
	backdrop.addEventListener("click", removeLightbox)
  };
  