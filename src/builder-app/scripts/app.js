/*
    MAIN SCRIPTS - Last updated: 06.08.15
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// DOC READY
//-----------------------------------------------------------------

$(function(){
	loadIncludes(); // ===> FIRST POINT OF ENTRY
});

//-----------------------------------------------------------------
// LOAD INCLUDES
//-----------------------------------------------------------------

function loadIncludes() {
	var $includes = $('[data-include]');
	var totalIncludes = $includes.length;
	var includesLoaded = 0;

	console.log('Includes loading...');

	// When all includes have loaded, safe to INIT
	function registerInclude() {
		includesLoaded ++;
		if (includesLoaded == totalIncludes) {
			console.log('Includes loaded successfully'); // ==> INIT on success
			init();
		}
	}
	// Register include after loading
	$includes.each(function(){
		var path = $(this).attr('data-include');
		$(this).load(path, registerInclude);
	})
}

//-----------------------------------------------------------------
// INITIALISE - Runs when all includes have loaded
//-----------------------------------------------------------------

function init() {
	console.log('Initialising...');
	$('body').removeClass('is-loading');
	initLoginButtons();
	initTopbarButtons(); // moved here
	authenticate();
}

//-----------------------------------------------------------------
// After load, when URL changes loadRoute
//-----------------------------------------------------------------

$(window).on('hashchange', function(){

	// Needs to have passed the login intro
	if ($('.has-authenticated').length) {
		loadRoute();
	}
});

//-----------------------------------------------------------------
// SETUP NAVIGATION => Runs after loadRoutes
//-----------------------------------------------------------------

function setupNavigation() {
	console.log('Rendering Page...');
	setToolTab();
	setContextItem();
}

//-----------------------------------------------------------------
// INIT TOPBAR BUTTONS
//-----------------------------------------------------------------

function initTopbarButtons() {
	console.log('Binding buttons');

	// Menu Button
	$('[data-menu-btn]').unbind('click').bind('click ontouchstart', function(e){
		e.preventDefault();
		console.log('Menu button is triggering.');

		// Menu is either toggled open. Or open by default (body has neither class)
		var $body = $('body');
		var noMenuClasses = !$body.hasClass('has-open-menu') && !$body.hasClass('has-closed-menu');
		var hasOpenMenuClass = $body.hasClass('has-open-menu');
		var menuIsOpen = noMenuClasses || hasOpenMenuClass;
		var isMobile = $(window).width() < 992;

		// Has INIT on mobile. Starts closed, prepare accordingly.
		if (isMobile && noMenuClasses) {
			$body.addClass('has-open-menu').removeClass('has-closed-menu');
			return;
		}

		if (menuIsOpen) {
			$body.addClass('has-closed-menu').removeClass('has-open-menu');
		} else {
			$body.addClass('has-open-menu').removeClass('has-closed-menu');
		}
	});
	// come back here
	// var isAnimating = $(".lv-context-menu").is(':animated');
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
			// if level1: settings  OR   if level2: site
			if (stringId == getHashBang().level1 || stringId == getHashBang().level2) {
				$this.removeAttr('hidden'); // show selected
				$('[data-tool-tab*="'+stringId+'"]').addClass('active'); // mark active

				// Don't let [site, docs] change title = always parent title (Development)
				if (stringId == getHashBang().level1) {
					toolTabTitle.text(stringId + "  "); // space to remove glitch
				}
			}
		});
		// Funky gradient on header
		applyGradientHeader('.lv-context-menu-header .subheader');
}

//-----------------------------------------------------------------
// SET CONTEXT ITEM
//-----------------------------------------------------------------

function setContextItem() {
	var level1 = getHashBang().level1; // Eg. content
	var level2 = getHashBang().level2; // Eg. settings
	var level3 = getHashBang().level3; // Eg. site (development/site)

	//=========================================
	// Need to match 'level2' (settings) with '#/content/settings/'
	// Remove all active EVERYWHERE
	//=========================================

	$('.lv-context-menu-panel .active').removeClass('active');

	//=========================================
	// If second level exists (Eg. '/content/settings')
	//=========================================

	if (level2) {
		// Locates the anchor which matches browser URL
		$('[data-tool-tab-content="'+level1+'"] a[href="#/'+level1+'/'+level2+'/"]').parent().addClass('active');
	}
}

//-----------------------------------------------------------------
// Pixel Gradient
//-----------------------------------------------------------------

function applyGradientHeader(target) {
	console.log('Applying header gradient');

	$(target).removeClass('sn-pxg').pxgradient({
	  step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
	  colors: ["#F12D66","#20B5C3"],
	  dir: "x"
	});
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------


