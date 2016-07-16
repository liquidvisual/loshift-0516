/*
    LOGIN SCRIPTS - Last updated: 15.07.16
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------

var loggedIn = localStorage.getItem("loggedIn");

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------

$(window).load(function() {

	$('[data-login]').click(function(e){
		e.preventDefault();
		setLogin(true);

		// loadIncludes();	// start process
		// window.location.replace('#/overview/welcome/');
		// $(window).trigger('hashchange'); // wtf
		location.reload();
	});
});

//-----------------------------------------------------------------
// Get Login
//-----------------------------------------------------------------

function getLogin() {
    return localStorage.getItem("loggedIn");
}

//-----------------------------------------------------------------
// Set Login
//-----------------------------------------------------------------

function setLogin(value) {
	if (typeof(Storage) != "undefined") {
		localStorage.setItem("loggedIn", value);
	} else {
		console.log('Oops! Local Storage not supported.');
	}
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------