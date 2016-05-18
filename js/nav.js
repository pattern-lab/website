var navActive = false;
var navOpen = document.querySelector('.nav-link');
var navListOpen = document.querySelector('.nav-list');
navOpen.addEventListener("click", function(event){
	event.preventDefault();
	if (navActive === false) {
	navActive = true;	
	 navListOpen.classList.add("active");
	 }
	 else {
		 navActive = false;
		 navListOpen.classList.remove("active");
	 }
	});