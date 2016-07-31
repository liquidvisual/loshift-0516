/*
    ROUTES.JS - Last updated: 21.07.16
*/
//-----------------------------------------------------------------
/*
	/manage/#/development/docs/installation-and-setup/
	/manage/#/content/settings/
	/manage/#/preview/...
*/
//-----------------------------------------------------------------

function loadRoute() {

	console.log('Loading main view...');

	//-----------------------------------------------------------------
	// VARIABLES
	//-----------------------------------------------------------------

	var path;
	var level1 = getHashBang().level1; // eg. /development/
	var level2 = getHashBang().level2; // eg. /development/docs/
	var level3 = getHashBang().level3; // eg. /development/docs/installation-and-setup/
	var $mainView = $('[data-view]');
	var hasAuthenticated = $('.has-authenticated').length;

	//-----------------------------------------------------------------
	// SETUP NAVIGATION (ATTEMPT)
	//-----------------------------------------------------------------

	setupNavigation();

	//-----------------------------------------------------------------
	// Entering via /manage/
	///-----------------------------------------------------------------

	if (!level1) {
		console.log('Defaulting to welcome view...');
		window.location.replace('#/overview/welcome/');
		return loadRoute(); // exit and retry with new hash
	}

	//-----------------------------------------------------------------
	// Tab Switching
	//-----------------------------------------------------------------

	if (hasAuthenticated && level1 && !level2) {
		console.log('Switching Tabs');
		return;
	}

	//-----------------------------------------------------------------
	// IF PREVIEW EXISTS
	//-----------------------------------------------------------------

	if (hasAuthenticated && level1 == "preview") {
		console.log("PREVIEW");
	}

	//-----------------------------------------------------------------
	//
	//-----------------------------------------------------------------

	path = '/builder-app/views/'+level1+'/'+level2+'.html';
	console.log('Preparing path: '+path);

	//-----------------------------------------------------------------
	// LOAD MODULE
	//-----------------------------------------------------------------

    $mainView.load(path, function(response, status, xhr) {
    	console.log('STATUS: '+status)

    	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    	// SUCCESS
    	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    	if (status == 'success') {
    		console.log('Main view loaded successfully. Rendering page...');
    		playIntro();
    	}
    	//=========================================
    	// 404
    	//=========================================

		else if (status == "error") {
			console.log('Failed to load. Attempting to load 404 page.');
			$(this).load('/builder-app/views/overview/404.html');
			playIntro();
		}
	});
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
// LOAD INCLUDES
//-----------------------------------------------------------------

//=========================================
// Trigger "AppMode" if 'Preview' selected
// if (getHashBang().level1 !== 'preview' ) {
