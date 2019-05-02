document.addEventListener('DOMContentLoaded', () => {

	let btnElements = document.querySelectorAll('button');
	let contentElements = document.querySelectorAll('.content');
	let buttonIndex = 0;
	let topDistance;
	let elementHeight;
	let footerElement = document.querySelector('.footer');
	updateContent(buttonIndex);

	btnElements.forEach((btnElement, index) => {
		btnElement.addEventListener('click', () => {
			buttonIndex = index;
			updateContent(buttonIndex);
		})
	})

	window.addEventListener('resize', () => {
		updateContent(buttonIndex);
	})




	function updateContent(btnIndex) {
		contentElements.forEach((contentElement, index) => {
			contentElement.style.opacity = 0;
			contentElement.style.pointerEvents = "none";
			contentElement.style.height = "0px";
			contentElement.style.width = "0px";


			if (btnIndex == index) {
				contentElement.style.opacity = 1;
				contentElement.style.pointerEvents = "auto";
				contentElement.style.width = "auto";
				contentElement.style.height = "auto";

				calculateFooterDistance(contentElement);

				contentElement.addEventListener('transitionend', () => { // fjernede eventlistener fra forEachen i version 01-02, det er ikke en gid ide at tilføje eventlisteners i en forEach fordi den bliver ved og ved med at tilføje selvom elementet allerede har den Event

					console.log("transition færdig " + contentElement.id);
					// console.log()
					if (contentElements[buttonIndex] == contentElement) {
						calculateFooterDistance(contentElement);
						console.log("samme");
					}
					else {
						console.log("ikke samme");
					}



				})
			}
		})

	}

	function calculateFooterDistance(contentElement) {
		topDistance = contentElement.offsetTop;
		elementHeight = contentElement.offsetHeight;
		footerElement.style.marginTop = topDistance + elementHeight + "px";
	}

	// Bedst fungerende version af opgave 9 ligger i 01-02 mappen.


}) // DOMContentLoaded slutter