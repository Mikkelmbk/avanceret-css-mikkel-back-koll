document.addEventListener('DOMContentLoaded', () => {

	let rootElement = document.documentElement;

	let sliderElement = document.querySelector('.slider');
	let sliderDistanceElement = document.querySelector('.slider-distance');
	let sliderOpacityElement = document.querySelector('.slider-opacity');

	updateSliders();
	
	sliderElement.addEventListener('input',()=>{
		updateSliders();
	})

	sliderDistanceElement.addEventListener('input',()=>{
		updateSliders();
	})
	sliderOpacityElement.addEventListener('input',()=>{
		updateSliders();
	})
	




	function updateSliders(){
		rootElement.style.setProperty('--slider',`${sliderElement.value}`)
		rootElement.style.setProperty('--distance',`${sliderDistanceElement.value}px`);
		rootElement.style.setProperty('--opacity',`${sliderOpacityElement.value}`);
	}



}) // DOMContentLoaded slutter