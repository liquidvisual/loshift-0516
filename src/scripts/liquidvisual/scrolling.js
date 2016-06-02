/*
	SCROLLING.JS - Last updated: 16.06.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// http://stackoverflow.com/questions/24765185/hide-fixed-header-on-scroll-down-show-on-scroll-up-and-hover
// http://jsfiddle.net/uAc3p/5/
//-----------------------------------------------------------------

$(function(){
	var lastScrollTop = 0;
	var delta = 5;

	$(window).scroll(function(event){
		var header = $('.global-header');
		var st = $(this).scrollTop();
		var headerHeight = header.position().top + header.outerHeight(true);

		if (Math.abs(lastScrollTop - st) <= delta) return;

		if (st > lastScrollTop ) {
			$('body').removeClass('scrolling-up');

		} else {
			// upscroll code
			$('body').addClass('scrolling-up');
		}
		lastScrollTop = st;
	});
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

// var topMenu = $(".topbar");
// var topMenuHeight = topMenu.outerHeight();
// var menuItems = $('.topbar, .off-canvas-menu').find('a');

//-----------------------------------------------------------------
// Click Logo: Jump to Top
//-----------------------------------------------------------------

// $('.global-header .logo').click(function(e){
// 	e.preventDefault();
// 	$('html, body').stop().animate({ scrollTop: 0 }, 500);
// });

//-----------------------------------------------------------------
// Scrolling Logic
//-----------------------------------------------------------------

// $(window).scroll(function() {
// 	var scrollTop = $(this).scrollTop();
// 	var scrollHeight = $('.global-header').position().top + $('.global-header').outerHeight(true);

// 	if (scrollTop > scrollHeight) {
// 		$('body').addClass('scrolling-down');
// 	} else {
// 		$('body').removeClass('scrolling-down');
// 	}
// });

//-----------------------------------------------------------------
// Click to Scroll Animation
//-----------------------------------------------------------------

// menuItems.click(function(e){
// 	var href = $(this).attr("href"),
// 	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;

// 	e.preventDefault();

// 	$('html, body').stop().animate({
// 		scrollTop: offsetTop
// 		}, 300);
// });

//==================================================
//
//==================================================