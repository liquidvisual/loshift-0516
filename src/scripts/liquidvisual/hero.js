/*
    HERO.JS - Last updated: 20.10.15
*/
//-----------------------------------------------------------------
// Document Ready
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //==================================================
    // Variables
    //==================================================
    //==================================================
    // Launch Carousel
    //==================================================

    function launchCarousel() {
        var isTablet = $(window).width() < 1025; // no more touch

        $('.lv-hero').bxSlider({
            auto: true, //(isTablet ? false : true),
            mode: 'horizontal', // fade (much have fixed height or won't work)
            adaptiveHeight: true,
            responsive: true,
            touchEnabled: true,
            speed: 1000,
            pause: 4000,
            slideMargin: 0,
            slideSelector: ".lv-hero-item",
            minSlides: 1,
            controls: true,
            nextSelector: ".lv-hero-carousel-next-btn",
            prevSelector: ".lv-hero-carousel-prev-btn",
            nextText: "",
            prevText: "",
            infiniteLoop: true,
            useCSS: true,
            pager: false,
            pagerSelector: '.lv-hero-carousel-bullets'
            // onSliderLoad:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');},
            // onSlideBefore: function(){  $('.lv-hero-caption').hide().removeClass('fadeInLeft');},
            // onSlideAfter:  function(){  $('.lv-hero-caption').show().addClass('fadeInLeft');}
        });
    }

    $(document).ready(function() {
        // Multiple slides will trigger the hero carousel
        if ($('.lv-hero-item').length > 1) launchCarousel();
    });

}(jQuery));

//==================================================
//
//==================================================