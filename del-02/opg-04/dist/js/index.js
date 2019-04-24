document.addEventListener('DOMContentLoaded', () => {

	let rootElement = document.documentElement;


	let sliderElementHue = document.querySelector('.slider1');
	sliderElementHue.addEventListener('change', () => {
		displaySliderPosition();
	})


	let sliderElementSaturation = document.querySelector('.slider2');
	sliderElementSaturation.addEventListener('change', () => {
		displaySliderPosition();
	})


	let sliderElementLightness = document.querySelector('.slider3');
	sliderElementLightness.addEventListener('change', () => {
		displaySliderPosition();
	})

	
	let sliderOutputElementHue = document.querySelector('.sliderOutput1');
	let sliderOutputElementSaturation = document.querySelector('.sliderOutput2');
	let sliderOutputElementLightness = document.querySelector('.sliderOutput3');

	displaySliderPosition();

	function displaySliderPosition() {
		sliderOutputElementHue.innerHTML = sliderElementHue.value;
		sliderOutputElementSaturation.innerHTML = sliderElementSaturation.value;
		sliderOutputElementLightness.innerHTML = sliderElementLightness.value;
		rootElement.style.setProperty('--color',`hsl(${sliderElementHue.value},${sliderElementSaturation.value}%,${sliderElementLightness.value}%)`)

	}



}) // DOMContentLoaded slutter