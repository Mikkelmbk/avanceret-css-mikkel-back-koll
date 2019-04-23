document.addEventListener('DOMContentLoaded', () => {

	let myButton1Element = document.querySelector('.myButton1');
	let myButton2Element = document.querySelector('.myButton2');
	let rootElement = document.documentElement;
	
	myButton1Element.addEventListener('click', () => {


		rootElement.style.setProperty("--font-size"," var(--font-size-large)")


	})

	myButton2Element.addEventListener('click', () => {


		rootElement.style.setProperty("--font-size","var(--font-size-normal)");
		
	})
})