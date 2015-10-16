/* var languageBtn = document.querySelectorAll(".tab");
for (i=0; i<languageBtn.length; ++i){
	console.log(languageBtn[i]);
	languageBtn.addEventListener("click", function(event){
		console.log(languageBtn);
		event.preventDefault();
		//this.className.add("active");
		//if (languageBtn[i].className === "active") {
		//this.className.remove("active");
		//}
		//else {
		//this.classList.add("active");
		//alert(i);
		//}
	});
} */


var languageBtn = $('.tab');
$('.tab:nth-of-type(1)').addClass('active');
languageBtn.on('click', function(e){ 
	e.preventDefault();
	languageBtn.removeClass('active');
	$(this).addClass('active');
	var thisHref = $('.tab.active .language-btn').attr('href');
	console.log(thisHref);
	if (thisHref === '#php') {	
	$('#node').css('display', 'none');
	$('#php').css('display', 'block');
	}
	else if (thisHref === '#node') {
		$('#php').css('display', 'none');
		$('#node').css('display', 'block')
	}
	
});


//$('.php-block').css('background', 'red');
//$('.node-block').css('background', 'blue');