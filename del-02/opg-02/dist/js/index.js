document.addEventListener('DOMContentLoaded', () => {

	let myButton1Element = document.querySelector('.myButton1');
	let myButton2Element = document.querySelector('.myButton2');
	let rootElement = document.documentElement;
	
	myButton1Element.addEventListener('click', () => {

		// Ændrer en Css custom property, også kaldet en Css Variabel
		rootElement.style.setProperty("--main-bg-color","red");

		let GetColorAfterSettingitInJS = rootElement.style.getPropertyValue("--main-bg-color");
		console.log(GetColorAfterSettingitInJS);

		rootElement.style.setProperty("--font-size"," var(--font-size-large)")


	})

	myButton2Element.addEventListener('click', () => {

		let getColorWithoutSettingitInJS = getComputedStyle(rootElement).getPropertyValue("--main-bg-color");
		console.log(getColorWithoutSettingitInJS);

		rootElement.style.setProperty("--font-size","var(--font-size-normal)");
		
	})
})