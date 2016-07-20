/*
    MAIN SCRIPTS - Last updated: 06.08.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// DOC READY
//-----------------------------------------------------------------

$(function(){
	authenticate(); // ===> FIRST POINT OF ENTRY
});

//-----------------------------------------------------------------
// AUTHENTICATE
//
// 1. Authenticate - if logged in, pull in includes of app frame
// otherwise load in main view only.
// 2. Init
// 3. Hash Change will trigger Init
//-----------------------------------------------------------------

function authenticate() {
	if (loggedIn) {
		loadIncludes();
	} else {
		loadMainView();
	}
}

//-----------------------------------------------------------------
// INITIALISE
//-----------------------------------------------------------------

function init(){
	setToolTab();
	setLevel2();
	initToolButtons();
	loadMainView();
}

$(window).on('hashchange', init);

//-----------------------------------------------------------------
// LOAD INCLUDES (Caching?)
//-----------------------------------------------------------------

function loadIncludes() {
	var $includes = $('[data-include]');
	var totalIncludes = $includes.length;
	var includesLoaded = 0;

	// When all includes have loaded, safe to INIT
	function registerInclude() {
		includesLoaded ++;
		includesLoaded == totalIncludes ? init() : null;
	}

	// Register include after loading
	$includes.each(function(){
		var path = $(this).attr('data-include');
		$(this).load(path, registerInclude);
	})
}

//-----------------------------------------------------------------
// LOAD MAIN VIEW
//-----------------------------------------------------------------

function loadMainView() {
	var $mainView = $('[data-view]');
	var level1 = getHashBang().level1;
	var level2 = getHashBang().level2;
	var level3 = getHashBang().level3;
	var path = '/builder-app/views/'+level1+'/'+level2+'.html';

	if (!loggedIn) {
		$mainView.load('/builder-app/views/login.html', onLoadComplete);
		return;
	}

	// If the second level exists in the hashbang
	if (level2) {

	    $mainView.load(path, function(response, status, xhr) {
	    	onLoadComplete();

	    	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	    	// SUCCESS
	    	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	    	if (status == 'success') {
	    		// applyGradientHeader();
	    	}
	    	//=========================================
	    	// 404
	    	//=========================================

			else if (status == "error") {
				$(this).load('/builder-app/views/404.html');
				console.log('Failed to load. Attempting to load 404 page.');
			}
		});
	}

	//=========================================
	// Trigger "AppMode" if 'Preview' selected
	//=========================================

    if (getHashBang().level1 !== 'preview' ) {
    	$('body').addClass('menu-is-open');
    }
    onLoadComplete();
}

//-----------------------------------------------------------------
// INIT TOOL BUTTONS - make this only fire once
//-----------------------------------------------------------------

function initToolButtons() {
console.log('binding buttons');
	// Menu Button
	$('.lv-tool-menu-btn').unbind('click').bind('click', function(e){
		e.preventDefault();
		console.log('Menu button is triggering.');
		$('body').toggleClass('menu-is-open');
		// var isAnimating = $(".lv-context-menu").is(':animated');
	});

	// come back here
}

//-----------------------------------------------------------------
// SET TOOL TAB (Vertical)
//-----------------------------------------------------------------

function setToolTab() {
	var toolTabTitle = $('[data-tool-tab-title]');
	var toolTabContent = $('[data-tool-tab-content]');
		toolTabContent.attr('hidden', true); // hide all
		$('[data-tool-tab]').removeClass('active'); // reset active

		// loop all tab content
		toolTabContent.each(function(){
			var $this = $(this);
			var stringId = $this.attr('data-tool-tab-content'); // Eg. 'design', 'development' etc

			// Choose Tab based on URL Hashbang
			if (stringId == getHashBang().level1) {
				$this.removeAttr('hidden'); // show selected
				$('[data-tool-tab="'+stringId+'"]').addClass('active'); // mark active
				toolTabTitle.text(stringId);
			}
		});

		// Funky gradient on header
		applyGradientHeader();
}

//-----------------------------------------------------------------
// ON LOAD COMPLETE
//-----------------------------------------------------------------

function onLoadComplete() {
	$('.lv-page').removeClass('is-loading');
}

//-----------------------------------------------------------------
// SET LEVEL 2
//-----------------------------------------------------------------

function setLevel2() {
	var level2 = getHashBang().level2;
	$('.lv-context-menu-panel a').parent().removeClass('active');

	// If second level exists in the hashbang
	if (level2) {
		$('.lv-context-menu-panel a[href*="'+level2+'"]').parent().addClass('active');
	}
}

//-----------------------------------------------------------------
// SET LEVEL 3 ----> DEV PANEL (COME BACK TO)
//-----------------------------------------------------------------

function setLevel3() {
	// var level3 = getHashBang().level3;
	// $('.lv-context-menu-panel a').parent().removeClass('active');

	// If second level exists in the hashbang
	if (level3) {
		// $('.lv-context-menu-panel a[href*="'+level3+'"]').parent().addClass('active');
	}
}

//-----------------------------------------------------------------
// UTILITY: Get Hashbang
//-----------------------------------------------------------------

function getHashBang() {
	var hashBang_arr = window.location.hash.split('/');
	var hashBang = {};
		hashBang.level1  = hashBang_arr[1];
		hashBang.level2  = hashBang_arr[2];
		hashBang.level3  = hashBang_arr[3];
		hashBang.level4  = hashBang_arr[4];
		hashBang.level5  = hashBang_arr[5];
		hashBang.level6  = hashBang_arr[6];
		hashBang.level7  = hashBang_arr[7];
		hashBang.level8  = hashBang_arr[8];
		hashBang.level9  = hashBang_arr[9];
		return hashBang;
}

//-----------------------------------------------------------------
// Pixel Gradient
//-----------------------------------------------------------------

function applyGradientHeader() {
	console.log('Applying header gradient');
	$(".subheader").removeClass('sn-pxg').pxgradient({
	  step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
	  colors: ["#F12D66","#20B5C3"],
	  dir: "x"
	});
}

// setTimeout(applyGradientHeader, 10);

// $(window).load(function() {
// 	applyGradientHeader();
// });

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------


