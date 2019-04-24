document.addEventListener('DOMContentLoaded', () => {

	let myButtonElements = document.querySelectorAll('#color-buttons button');
	let rootElement = document.documentElement;

	myButtonElements.forEach((myButtonElement)=>{

		myButtonElement.addEventListener('click',(event)=>{
			
			// ComputedStyle er når et givent element har fået sin style fra en style fil, istedet for gennem javascript som jo tilføjer Inline Styling.
			let collectedColor = getComputedStyle(event.target).getPropertyValue("background-color");

			console.log(collectedColor);

			rootElement.style.setProperty("--chosen-color",collectedColor);


		})
	})







	
}) // DOMContentLoaded slutter