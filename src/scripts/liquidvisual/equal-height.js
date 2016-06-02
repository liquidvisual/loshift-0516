/*
	EQUAL-HEIGHT.JS - Last updated: 27.10.15
*/
//-----------------------------------------------------------------
// EQUAL HEIGHT
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //==================================================
    // Variables
    //==================================================

    var equalHeightElement = $('[data-match-height]');

    /* Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

    // http://codepen.io/micahgodbolt/pen/FgqLc

    //==================================================
    // Launch
    //==================================================

    var equalHeight = function(target){

    	if ($(window).width() >= 768) {

    		var currentTallest = 0;
	    	var currentRowStart = 0;
	    	var rowDivs = [];
	    	var $el;
	    	var topPosition = 0;

    		$(target).each(function() {
    			$el = $(this);
    			$($el).height('auto');
    			topPosition = $el.position().top;

    			if (currentRowStart != topPosition) {
    				for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
    					rowDivs[currentDiv].height(currentTallest);
    				}
    				rowDivs.length = 0; // empty the array
    				currentRowStart = topPosition;
    				currentTallest = $el.height();
    				rowDivs.push($el);
    			} else {
    				rowDivs.push($el);
    				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    			}
    			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
    				rowDivs[currentDiv].height(currentTallest);
    			}
    		});
    	} else {
    		equalHeightElement.height('auto');
    	}
    };

    $(window).load(function() {
    	equalHeight(equalHeightElement);
    });

    $(window).resize(function(){
    	equalHeight(equalHeightElement);
    });

}(jQuery));

//==================================================
//
//==================================================