/*
    MAIN.JS - Last updated: 27.10.15
*/
//-----------------------------------------------------------------
// Variables
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

$(document).ready(function() {
    NProgress.start(); // Start preloader bar
    $('input, textarea').placeholder(); // IE9 Patch

    $('.carousel').bxSlider({
        auto: true,
        mode: 'horizontal', // fade (much have fixed height or won't work)
        adaptiveHeight: true,
        responsive: true,
        touchEnabled: true,
        speed: 1000,
        pause: 8000,
        slideMargin: 0,
        minSlides: 1,
        controls: false,
        infiniteLoop: true,
        useCSS: true,
        pager: true
    });

    key('⌘+shift+m, ctrl+shift+m', function(){
      function getHashBang() {
        var hashBang_arr = window.location.hash.split('/');
        var hashBang = {};
          hashBang.firstLevel  = hashBang_arr[1];
          hashBang.secondLevel = hashBang_arr[2];
          hashBang.thirdLevel  = hashBang_arr[3];
          return hashBang;
      }

      window.location = '/manage/';
    });
});

$(window).load(function() {
    NProgress.done();

    // H5F.setup(document.getElementById("form")); // Patch IE9 for form validation
    // $('.carousel').carousel();
});

//-----------------------------------------------------------------
// Off Canvas Menu
//-----------------------------------------------------------------

var $offCanvasMenu = $("[data-off-canvas-menu]");

$offCanvasMenu.mmenu({ "offCanvas": { "position": "right" }});

$('.hamburger').bind('click', function(e) {
    e.preventDefault();
    $offCanvasMenu.trigger('open.mm');
});

//==================================================
//
//==================================================



//==================================================
//
//==================================================

$(".global-header").headroom({
    // vertical offset in px before element is first unpinned
    offset : 60,
    // scroll tolerance in px before state changes
    tolerance : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 5,
        down : 0
    },
    // css classes to apply
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "headroom--pinned",
        // when scrolling down
        unpinned : "headroom--unpinned",
        // when above offset
        top : "headroom--top",
        // when below offset
        notTop : "headroom--not-top",
        // when at bottom of scoll area
        bottom : "headroom--bottom",
        // when not at bottom of scroll area
        notBottom : "headroom--not-bottom"
    },
    // element to listen to scroll events on, defaults to `window`
    // scroller : someElement,
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {},
    // callback when at bottom of page, `this` is headroom object
    onBottom : function() {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom : function() {}
});
