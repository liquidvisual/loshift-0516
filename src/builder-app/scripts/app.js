/*
    MAIN SCRIPTS - Last updated: 06.08.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

// localStorage.setItem("loggedIn", "");
var loggedIn = localStorage.getItem("loggedIn");

//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

if (loggedIn) {
	loadIncludes();
} else {

	// Login
	assembleView();
	$('.lv-page').removeClass('is-loading');
}

//-----------------------------------------------------------------
// Pixel Gradient
//-----------------------------------------------------------------

function applyGradientHeader() {
	$("h1.subheader, h2.subheader, h3.subheader").pxgradient({
	  step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
	  colors: ["#F12D66","#20B5C3"],
	  dir: "x"
	});
}

$(window).load(function() {
	applyGradientHeader();
});

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

function init(){
	setToolTab();
	setSecondLevel();
	initToolButtons();
	// hljs.initHighlightingOnLoad();
	assembleView();
	$('.lv-page').removeClass('is-loading');

	// alert('fuckyoa');
}

//-----------------------------------------------------------------
// ON HASH CHANGE
//-----------------------------------------------------------------

$(window).on('hashchange', function() {
    setToolTab();
    setSecondLevel();
    assembleView();
});

//-----------------------------------------------------------------
// loadInclude - caching?
//-----------------------------------------------------------------

function loadIncludes(path) {
	// var totalIncludes = $('[data-include').length;

	$('[data-include]').each(function(){
		var path = $(this).attr('data-include');
		$(this).load(path, init);
	})
}

//-----------------------------------------------------------------
// loadView
//-----------------------------------------------------------------

function assembleView() {

	var firstLevel = getHashBang().firstLevel;
	var secondLevel = getHashBang().secondLevel;
	var path = '/builder-app/views/'+firstLevel+'/'+secondLevel+'.html';

	if (!loggedIn) {
		$('[data-view]').load('/builder-app/views/login.html');
		return;
	}

	// If the second level exists in the hashbang
	if (secondLevel) {
	    $('[data-view]').load(path, function(response, status, xhr) {
			if (status == "error") {
				// 404
				$('[data-view]').load('/builder-app/views/404.html');
			}
		});
	}

    // Trigger AppMode if 'Preview' is triggered
    if (getHashBang().firstLevel !== 'preview' ) {
    	$('body').addClass('menu-is-open');
    }
}

//-----------------------------------------------------------------
// Get Hash Bang
//-----------------------------------------------------------------

function getHashBang() {
	var hashBang_arr = window.location.hash.split('/');
	var hashBang = {};
		hashBang.firstLevel  = hashBang_arr[1];
		hashBang.secondLevel = hashBang_arr[2];
		hashBang.thirdLevel  = hashBang_arr[3];
		return hashBang;
}

//-----------------------------------------------------------------
// Init Tool Buttons
//-----------------------------------------------------------------

function initToolButtons() {

	// Menu Button
	$('.lv-tool-button').bind('click', function(e){
		e.preventDefault();
		$('body').toggleClass('menu-is-open');

		// var body = $('body');

		// if (body.hasClass('menu-is-open')) {
		// 	body.removeClass('menu-is-open');
		// } else {
		// 	body.addClass('menu-is-open');
		// }
	});
}

//-----------------------------------------------------------------
// Set Tool Tab
//-----------------------------------------------------------------

function setToolTab() {
	var toolTabTitle = $('[data-tool-tab-title]');
	var toolTabContent = $('[data-tool-tab-content]');
		toolTabContent.attr('hidden', true);
		$('[data-tool-tab]').removeClass('active');

		// loop all tabs
		toolTabContent.each(function(){
			var $this = $(this);
			var stringId = $this.attr('data-tool-tab-content');

			// Choose Tab based on Hashbang
			if (stringId == getHashBang().firstLevel) {
				$this.removeAttr('hidden');
				toolTabTitle.text(stringId);
				applyGradientHeader();
				$('[data-tool-tab="'+stringId+'"]').addClass('active');
			}
		});
}

//-----------------------------------------------------------------
// Set Second Level
//-----------------------------------------------------------------

function setSecondLevel() {
	var secondLevel = getHashBang().secondLevel;
	$('.lv-context-menu-panel a').parent().removeClass('active');

	// If the second level exists in the hashbang
	if (secondLevel) {
		$('.lv-context-menu-panel a[href*="'+secondLevel+'"]').parent().addClass('active');
	}
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------




//-----------------------------------------------------------------
//
//-----------------------------------------------------------------



