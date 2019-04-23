document.addEventListener('DOMContentLoaded', () => {

	let myButtonElements = document.querySelectorAll('.myButton');
	let rootElement = document.documentElement;

	myButtonElements.forEach((myButtonElement)=>{

		myButtonElement.addEventListener('click',(event)=>{
			
			let collectedColor = getComputedStyle(event.target).getPropertyValue("background-color");


			rootElement.style.setProperty("--chosen-color",collectedColor);


		})
	})






	

})