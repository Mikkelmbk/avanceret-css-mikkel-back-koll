document.addEventListener('DOMContentLoaded', () => {

// ===========================================================================================================================
//  Jeg bruger getBoundingClientRect funktionen til at regne ud hvor langt jeg er fra toppen af skærmen, og så bruger jeg en if statement der siger at hvis jeg er mere end indholdet af min scrollPos variabel fra toppen af skærmen så tilføjer den classen "stickyHeader", og hvis ikke, så fjerner den classen "stickyHeader"

	var scrollPos = -2;
	let logoElementSmall = document.querySelector('.logo');
	let logoElementBig = document.querySelector('.logoBig');
    let headerElement = document.querySelector('header');
    document.addEventListener('scroll',()=>{
        if(document.body.getBoundingClientRect().top < scrollPos){
		   headerElement.classList.add('stickyHeader');
		   
		   logoElementSmall.style.opacity = 1;
		   logoElementBig.style.opacity = 0;
	
			
        }
        else{
			headerElement.classList.remove('stickyHeader');

			logoElementBig.style.opacity = 1;
			logoElementSmall.style.opacity = 0;
		

        } 
    });

	
// ===========================================================================================================================




}) // DOMContentLoaded slutter