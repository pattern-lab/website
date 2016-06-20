$('body').addClass('js');

var languageBtn = $('.tabs__link ');
var tabContent = $('.tabs__panel');
languageBtn.on('click', function(e){ 
	e.preventDefault();
	var thisHref = $(this).attr('href');
	var thisHrefSub = $(this).attr('href').substring(1);
	addHash(thisHrefSub);
	openTab(thisHref);
});

function addHash(id) {
	var changeSource = $('.tabs__link--is-active').attr('src');
	$(this).attr("src", changeSource);
	history.pushState(null, null, '#' + id);
}

function openTab (target) {
	languageBtn.removeClass('tabs__link--is-active');
	$('.tabs__link[href="' + target +'"]').addClass('tabs__link--is-active');
	tabContent.removeClass('tabs__item--is-active');
	$(target).addClass('tabs__item--is-active');
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
	$('.tabs__item:nth-of-type(1) .tabs__link').addClass('tabs__link--is-active');
	$('#php').addClass('tabs__item--is-active');
}