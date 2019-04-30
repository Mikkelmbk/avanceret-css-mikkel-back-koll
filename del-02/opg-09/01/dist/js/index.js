document.addEventListener('DOMContentLoaded', () => {

	let btnElements = document.querySelectorAll('button');
	let contentElements = document.querySelectorAll('.content');
	let buttonIndex = 0;
	let topDistance;
	let elementHeight;
	let footerElement = document.querySelector('.footer');
	updateContent(buttonIndex);

	btnElements.forEach((btnElement, index)=>{
		btnElement.addEventListener('click',()=>{
			buttonIndex = index;
			updateContent(buttonIndex);
		})
	})

	window.addEventListener('resize',()=>{
		updateContent(buttonIndex);
	})

	
	function updateContent(btnIndex){
		contentElements.forEach((contentElement, index)=>{
		contentElement.style.opacity = 0;
		contentElement.style.pointerEvents = "none";
		contentElement.style.height = "0px";
		contentElement.style.width = "0px";
		
		
		if(btnIndex == index){
			contentElement.style.opacity = 1;
			contentElement.style.pointerEvents = "auto";
			contentElement.style.width = "auto";
			contentElement.style.height = "auto";

			topDistance = contentElement.offsetTop;
			elementHeight = contentElement.offsetHeight;
			footerElement.style.marginTop = topDistance + elementHeight + "px";
		}
	})

	}

	
}) // DOMContentLoaded slutter