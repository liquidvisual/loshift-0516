/*
    RESPONSIVE-UTILITY.JS - Last updated: 17.01.16

    - Notes: Needs refactor
*/
//-----------------------------------------------------------------
// Responsive Utility
//-----------------------------------------------------------------

;(function($) {
    'use strict';

    //-----------------------------------------------------------------
    // Variables
    //-----------------------------------------------------------------

    var breakpoints = {};
    var temporaryArray = ['xs','sm','md','lg','xl'];

    //-----------------------------------------------------------------
    // Draw Responsive Table
    // Use meta data stored on the body by Sass
    //-----------------------------------------------------------------

    function getBreakpoints() {

        var $tableElement;
        var tableString = '';
        var bodyMetaString = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue('content');
        var breakpointsArray = (bodyMetaString.replace(/\\a/g, "").replace(/ /g,'')).replace(/'/g, '').replace(/"/g, '').split('|');

        //==================================================
        // Create breakpoints object from meta on body
        //
        // Example:
        // obj = { xs: 0, sm: 540 }
        //==================================================

        for (var i = 0; i < breakpointsArray.length; i++) {

            // Create object to be used with responsive display
            breakpoints[temporaryArray[i]] = Number(breakpointsArray[i].replace('px', ''));

            // Populate table string
            var tableRow = '<tr><td>'+temporaryArray[i]+'</td><td>'+breakpointsArray[i]+'</td></tr>';
            tableString += tableRow;
        }

        //==================================================
        // Output to DOM
        //==================================================

        $tableElement = '<table class="table breakpoints-table" style="width: 300px;">'+tableString+'</table>';
        $('[data-js="lv-responsive-table"]').append($tableElement);

        // console.log(breakpoints);
    };

    getBreakpoints();

    //-----------------------------------------------------------------
    // Display Responsive Helper
    //-----------------------------------------------------------------

    function responsiveHelper() {
        var $body = $('body');

        if ($('.lv-screen-data').length != 1) {
            $body.append('<div class="lv-screen-data"></div>');
        }
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var device;

        if (screenWidth < breakpoints.sm) device = "xs";
        if (screenWidth >= breakpoints.sm && screenWidth < breakpoints.md) device = "sm";
        if (screenWidth >= breakpoints.md && screenWidth < breakpoints.lg) device = "md";
        if (screenWidth >= breakpoints.lg && screenWidth < breakpoints.xl) device = "lg";
        if (screenWidth >= breakpoints.xl) device = "xl";

        $('.lv-screen-data').html(screenWidth+" x "+screenHeight+"<br>"+device)
            .css({
                'position': 'fixed',
                'top': 0,
                'padding': '10px 20px',
                'background': 'rgba(0,0,0,0.5)',
                'font-family': 'Helvetica Neue',
                'font-size': '14px',
                'color': 'white',
                'z-index': 2147483646,
            })
            .click(function(){
                $body.toggleClass('developer');
            });
    }

    //-----------------------------------------------------------------
    // Display if body has 'dev-mode' attribute
    //-----------------------------------------------------------------

    if ($('body[dev-mode-enabled="true"]').length) {

        // Launch it
        responsiveHelper();

        // Resize
        $(window).resize(function(){
            responsiveHelper();
        });
    }
}(jQuery));

//==================================================
//
//==================================================