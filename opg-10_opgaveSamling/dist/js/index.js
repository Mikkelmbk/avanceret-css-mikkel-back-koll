document.addEventListener('DOMContentLoaded', () => {

	let Opg1__myButton1Element = document.querySelector('.Opg1__myButton1');
	let Opg1__myButton2Element = document.querySelector('.Opg1__myButton2');
	let Opg1__rootElement = document.documentElement;

	Opg1__myButton1Element.addEventListener('click', () => {

		// Ændrer en Css custom property, også kaldet en Css Variabel
		Opg1__rootElement.style.setProperty("--Opg1-main-bg-color", "red");

		let GetColorAfterSettingitInJS = Opg1__rootElement.style.getPropertyValue("--Opg1-main-bg-color");
		console.log(GetColorAfterSettingitInJS);

	})

	Opg1__myButton2Element.addEventListener('click', () => {

		let getColorWithoutSettingitInJS = getComputedStyle(Opg1__rootElement).getPropertyValue("--Opg1-main-bg-color");
		console.log(getColorWithoutSettingitInJS);

	})

	//============================================= Opgave 1 slutter her ==================================================================


	let Opg2__myButton1Element = document.querySelector('.Opg2__myButton1');
	let Opg__2myButton2Element = document.querySelector('.Opg2__myButton2');
	let Opg2__rootElement = document.documentElement;

	Opg2__myButton1Element.addEventListener('click', () => {


		Opg2__rootElement.style.setProperty("--Opg2-font-size", " var(--Opg2-font-size-large)")


	})

	Opg__2myButton2Element.addEventListener('click', () => {


		Opg2__rootElement.style.setProperty("--Opg2-font-size", "var(--Opg2-font-size-normal)");

	})


	//============================================= Opgave 2 slutter her ==================================================================


	let Opg3__myButtonElements = document.querySelectorAll('#Opg3__color-buttons button');
	let Opg3__rootElement = document.documentElement;

	Opg3__myButtonElements.forEach((myButtonElement) => {

		myButtonElement.addEventListener('click', (event) => {

			// ComputedStyle er når et givent element har fået sin style fra en style fil, istedet for gennem javascript som jo tilføjer Inline Styling.
			let Opg3__collectedColor = getComputedStyle(event.target).getPropertyValue("background-color");

			console.log(Opg3__collectedColor);

			Opg3__rootElement.style.setProperty("--Opg3-chosen-color", Opg3__collectedColor);

		})
	})

	//============================================= Opgave 3 slutter her ==================================================================



	//  =========================================================================================================================
	// References
	let Opg4__groupElement;
	let Opg4__rootElement = document.documentElement;


	Opg4__groupElement = document.querySelector('.Opg4__hueGroup'); //Hue Information Div container
	let Opg4__hueInformation = {
		sliderOutputElement: Opg4__groupElement.querySelector('.Opg4__sliderOutput'), //Span
		sliderElement: Opg4__groupElement.querySelector('.Opg4__slider')
	}

	Opg4__groupElement = document.querySelector('.Opg4__saturationGroup'); //Saturation Information Div container
	let Opg4__saturationInformation = {
		sliderOutputElement: Opg4__groupElement.querySelector('.Opg4__sliderOutput'), //Span
		sliderElement: Opg4__groupElement.querySelector('.Opg4__slider')
	}

	Opg4__groupElement = document.querySelector('.Opg4__lightnessGroup'); //Lightness Information Div container
	let Opg4__lightnessInformation = {
		sliderOutputElement: Opg4__groupElement.querySelector('.Opg4__sliderOutput'), //Span
		sliderElement: Opg4__groupElement.querySelector('.Opg4__slider')
	}

	// =================================================================================================================================
	// function calls with objects as parameters
	updateInformation(Opg4__hueInformation);
	updateInformation(Opg4__saturationInformation);
	updateInformation(Opg4__lightnessInformation);

	// ==================================================================================================================================
	// function
	function updateInformation(informationObject) {

		informationObject.sliderOutputElement.innerHTML = informationObject.sliderElement.value; //Span innerHTML = slider value
		let hue = Opg4__hueInformation.sliderElement.value;
		let saturation = Opg4__saturationInformation.sliderElement.value;
		let lightness = Opg4__lightnessInformation.sliderElement.value;
		let colorString = `hsl(${hue},${saturation}%,${lightness}%)`;

		Opg4__rootElement.style.setProperty('--Opg4-color', colorString);

	}


	// ===================================================================================================================================
	// Events
	Opg4__hueInformation.sliderElement.addEventListener('input', () => {
		updateInformation(Opg4__hueInformation);
	})
	Opg4__saturationInformation.sliderElement.addEventListener('input', () => {
		updateInformation(Opg4__saturationInformation);
	})
	Opg4__lightnessInformation.sliderElement.addEventListener('input', () => {
		updateInformation(Opg4__lightnessInformation);
	})




	//============================================= Opgave 4 slutter her ==================================================================



	let Opg5__rootElement = document.documentElement;

	let Opg5__sliderElement = document.querySelector('.Opg5__slider');
	let Opg5__sliderDistanceElement = document.querySelector('.Opg5__slider-distance');
	let Opg5__sliderOpacityElement = document.querySelector('.Opg5__slider-opacity');

	updateSliders();

	Opg5__sliderElement.addEventListener('input', () => {
		updateSliders();
	})

	Opg5__sliderDistanceElement.addEventListener('input', () => {
		updateSliders();
	})
	Opg5__sliderOpacityElement.addEventListener('input', () => {
		updateSliders();
	})





	function updateSliders() {
		Opg5__rootElement.style.setProperty('--Opg5-slider', `${Opg5__sliderElement.value}`)
		Opg5__rootElement.style.setProperty('--Opg5-distance', `${Opg5__sliderDistanceElement.value}px`);
		Opg5__rootElement.style.setProperty('--Opg5-opacity', `${Opg5__sliderOpacityElement.value}`);
	}


	//============================================= Opgave 5 slutter her ==================================================================

	//  Intet JS til denne Opgave

	//============================================= Opgave 6 slutter her ==================================================================




	var Opg7__scrollPos = -2;
	let Opg7__logoElementSmall = document.querySelector('.Opg7__logo');
	let Opg7__logoElementBig = document.querySelector('.Opg7__logoBig');
	let Opg7__headerElement = document.querySelector('.Opg7__header');
	document.addEventListener('scroll', () => {
		if (document.body.getBoundingClientRect().top < Opg7__scrollPos) {
			Opg7__headerElement.classList.add('Opg7__stickyHeader');

			Opg7__logoElementSmall.style.opacity = 1;
			Opg7__logoElementBig.style.opacity = 0;


		}
		else {
			Opg7__headerElement.classList.remove('Opg7__stickyHeader');

			Opg7__logoElementBig.style.opacity = 1;
			Opg7__logoElementSmall.style.opacity = 0;


		}
	});

	//============================================= Opgave 7 slutter her ==================================================================



	var Opg8__parallax = document.querySelector(".Opg8__imageContainer1");

	let Opg8__scrollSpeed = 2;

	updateParallax();

	window.addEventListener("scroll", function () {

		updateParallax();
	});


	function updateParallax() {

		var Opg8__scrolledHeight = window.pageYOffset // Distance scrolled from top of page in pixels

		// console.log(scrolledHeight); // ScrolledHeight is the pixel distance from the screen calculated after each scroll

		// console.log(parallax.offsetTop); // The static distance the element has from the top of the page 644

		// console.log(parallax.offsetHeight); // The height of the element 377

		let Opg8__limit = Opg8__parallax.offsetTop + Opg8__parallax.offsetHeight;

		// console.log(limit); // Limit is the static distance the element has from the top of the page, added with the actual height of the element. 1021



		if (Opg8__scrolledHeight > Opg8__parallax.offsetTop && Opg8__scrolledHeight <= Opg8__limit) {
			Opg8__parallax.style.backgroundPositionY = (Opg8__scrolledHeight - Opg8__parallax.offsetTop) / Opg8__scrollSpeed + "px"; // Dividing by a lower number will make the element scroll by faster, whereas dividing by a larger number will make the element scroll by slower
			console.log((Opg8__scrolledHeight - Opg8__parallax.offsetTop) / Opg8__scrollSpeed + "px");
		} else {
			Opg8__parallax.style.backgroundPositionY = "0";
		}

	}



	//============================================= Opgave 8 slutter her ==================================================================

	let btnElements = document.querySelectorAll('.Opg9__btn');
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
			calculateFooterDistance(contentElements[buttonIndex]);


		})
	})

	window.addEventListener('resize', () => {
		updateContent(buttonIndex);
		calculateFooterDistance(contentElements[buttonIndex]);
	})


	calculateFooterDistance(contentElements[buttonIndex]);

	contentElements.forEach((contentElement) => {

		contentElement.addEventListener('transitionend', () => {

			if (contentElements[buttonIndex] == contentElement) {
				calculateFooterDistance(contentElement);

			}

		})

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
				contentElement.style.width = "90%";
				contentElement.style.height = "auto";

			}
		})

	}

	function calculateFooterDistance(contentElement) {
		topDistance = contentElement.offsetTop;
		elementHeight = contentElement.offsetHeight;
		footerElement.style.marginTop = topDistance + elementHeight + "px";
	}



})