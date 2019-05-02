document.addEventListener('DOMContentLoaded', () => {

	var parallax = document.querySelector(".imageContainer1");

	let scrollSpeed = 12;

	updateParallax();

	window.addEventListener("scroll", function () {

		updateParallax();
	});


	function updateParallax() {

		var scrolledHeight = window.pageYOffset // Distance scrolled from top of page in pixels

		// console.log(scrolledHeight); // ScrolledHeight is the pixel distance from the screen calculated after each scroll

		// console.log(parallax.offsetTop); // The static distance the element has from the top of the page 644

		// console.log(parallax.offsetHeight); // The height of the element 377

		let limit = parallax.offsetTop + parallax.offsetHeight;

		// console.log(limit); // Limit is the static distance the element has from the top of the page, added with the actual height of the element. 1021



		if (scrolledHeight > parallax.offsetTop && scrolledHeight <= limit) {
			parallax.style.backgroundPositionY = (scrolledHeight - parallax.offsetTop) / scrollSpeed + "px"; // Dividing by a lower number will make the element scroll by faster, whereas dividing by a larger number will make the element scroll by slower
			console.log((scrolledHeight - parallax.offsetTop) / scrollSpeed + "px");
		} else {
			parallax.style.backgroundPositionY = "0";
		}

	}


}) // DOMContentLoaded slutter