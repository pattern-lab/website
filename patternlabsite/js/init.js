$('body').addClass('js');

var languageBtn = $('.tab a');
var tabContent = $('.tab-panel');
languageBtn.on('click', function(e){ 
	e.preventDefault();
	var thisHref = $(this).attr('href');
	var thisHrefSub = $(this).attr('href').substring(1);
	addHash(thisHrefSub);
	openTab(thisHref);
});

function addHash(id) {
	var changeSource = $('.language-btn.active').attr('src');
	$(this).attr("src", changeSource);
	history.pushState(null, null, '#' + id);
}

function openTab (target) {
	languageBtn.removeClass('active');
	$('.tab a[href="' + target +'"]').addClass('active');
	tabContent.removeClass('tab-active');
	$(target).addClass('tab-active');
	console.log(target);
	
}
if(window.location.hash) {
	var hash = window.location.hash; //Puts hash in variable, and removes the # character
	openTab(hash);
	setTimeout(function() {
	window.scrollTo(0, 0);
	}, 1);
}
else {
	$('.tab:nth-of-type(1) a').addClass('active');
	$('#php').addClass('tab-active');
}