$(function () {
    'use strict';


/*==============MENU FIX==================*/ 
    var navOff = $('.main_menu').offset().top;


    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navOff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });
    
    

/*==============animation scroll js==================*/ 
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1500);
                return false;
            }
        }
    });
    



/*==============NICE SELECT==================*/ 
   $('#nice_select').niceSelect();


    
/*==========DOB PLUGIN==========*/		
    $.dobPicker({
        daySelector: '#dobday', /* Required */
        monthSelector: '#dobmonth', /* Required */
        yearSelector: '#dobyear', /* Required */
    });
 
    
    



});