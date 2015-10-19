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


var languageBtn = $('.tab a');
var tabContent = $('.tab-panel');
$('.tab:nth-of-type(1) a').addClass('active');
$('#php').addClass('tab-active');
languageBtn.on('click', function(e){ 
	e.preventDefault();
	languageBtn.removeClass('active');
	$(this).addClass('active');
	var thisHref = $(this).attr('href');
	console.log(thisHref);
	tabContent.removeClass('tab-active');
	$(thisHref).addClass('tab-active');
});