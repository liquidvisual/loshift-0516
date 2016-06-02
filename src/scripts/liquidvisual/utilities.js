/*
    UTILITIES.JS - Last updated: 16.03.16
*/
//-----------------------------------------------------------------
// Utilities
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // Developer: COMMAND+S for screen width
    //-----------------------------------------------------------------

    $(document).keypress(function(event) {
        if (event.which == 115 && (event.ctrlKey||event.metaKey)||(event.which == 19)) {
            event.preventDefault();
            alert("(w) "+$(window).width()+" (h) "+$(window).height());
            return false;
        }
        return true;
    });

    //-----------------------------------------------------------------
    // ScrollTo - Anything with a hash
    //
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    //-----------------------------------------------------------------

    $('a[href*="#"]:not([href="#"]):not(.accordion a)').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });

}(jQuery));

//==================================================
//
//==================================================

