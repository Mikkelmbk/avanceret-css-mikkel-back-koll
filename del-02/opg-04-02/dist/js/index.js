document.addEventListener('DOMContentLoaded', () => {
	//  =========================================================================================================================
	// References
	let groupElement;
	let rootElement = document.documentElement;
	

	groupElement = document.querySelector('.hueGroup'); //Hue Information Div container
	let hueInformation = {
		sliderOutputElement: groupElement.querySelector('.sliderOutput'), //Span
		sliderElement: groupElement.querySelector('.slider')
	}

	groupElement = document.querySelector('.saturationGroup'); //Saturation Information Div container
	let saturationInformation = {
		sliderOutputElement: groupElement.querySelector('.sliderOutput'), //Span
		sliderElement: groupElement.querySelector('.slider')
	}

	groupElement = document.querySelector('.lightnessGroup'); //Lightness Information Div container
	let lightnessInformation = {
		sliderOutputElement: groupElement.querySelector('.sliderOutput'), //Span
		sliderElement: groupElement.querySelector('.slider')
	}

	// =================================================================================================================================
	// function calls with objects as parameters
	updateInformation(hueInformation);
	updateInformation(saturationInformation);
	updateInformation(lightnessInformation);

	// ==================================================================================================================================
	// function
	function updateInformation(informationObject) {
	
		informationObject.sliderOutputElement.innerHTML = informationObject.sliderElement.value; //Span innerHTML = slider value
		let hue = hueInformation.sliderElement.value;
		let saturation = saturationInformation.sliderElement.value;
		let lightness = lightnessInformation.sliderElement.value;
		let colorString = `hsl(${hue},${saturation}%,${lightness}%)`;

		rootElement.style.setProperty('--color',colorString);

	}


	// ===================================================================================================================================
	// Events
	hueInformation.sliderElement.addEventListener('input', () => {
		updateInformation(hueInformation);
	})
	saturationInformation.sliderElement.addEventListener('input', () => {
		updateInformation(saturationInformation);
	})
	lightnessInformation.sliderElement.addEventListener('input', () => {
		updateInformation(lightnessInformation);
	})







}) // DOMContentLoaded slutter