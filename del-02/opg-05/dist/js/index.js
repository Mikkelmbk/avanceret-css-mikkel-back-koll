document.addEventListener('DOMContentLoaded', () => {

	let rootElement = document.documentElement;

	let sliderElement = document.querySelector('.slider');

	console.log(sliderElement.value);

	sliderElement.addEventListener('input',()=>{
		let sliderOutput = sliderElement.value;
		document.documentElement.style.setProperty('--positioning',`${sliderOutput}px`)
	})
	



}) // DOMContentLoaded slutter