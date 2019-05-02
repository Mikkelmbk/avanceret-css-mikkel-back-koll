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

	let Opg5__sliderElement = document.querySelector('.slider');
	let Opg5__sliderDistanceElement = document.querySelector('.slider-distance');
	let Opg5__sliderOpacityElement = document.querySelector('.slider-opacity');

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




})