document.addEventListener('DOMContentLoaded', () => {

	let btnElements = document.querySelectorAll('button');
	let contentElements = document.querySelectorAll('.content');
	let buttonIndex = 0;
	updateContent(buttonIndex);

	btnElements.forEach((btnElement, index)=>{
		btnElement.addEventListener('click',()=>{
			buttonIndex = index;
			updateContent(buttonIndex);
		})
	})

	
	function updateContent(btnIndex){
		contentElements.forEach((contentElement, index)=>{
		contentElement.style.opacity = 0;
		contentElement.style.pointerEvents = "none";
		// contentElement.style.display = "none";
	
		if(btnIndex == index){
			// contentElement.style.display = "block";
			contentElement.style.opacity = 1;
			contentElement.style.pointerEvents = "auto";
			

		}
	})

	}

	
}) // DOMContentLoaded slutter