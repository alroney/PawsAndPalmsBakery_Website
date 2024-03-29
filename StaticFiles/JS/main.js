(function ($) {
    "use strict";


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
/** NAVBAR SCRIPTS **/

    // Fixed Navbar
    $('.fixed-top').css('top', $('.top-bar').height());
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.fixed-top').addClass('bg-dark').css('top', 0);
        } else {
            $('.fixed-top').removeClass('bg-dark').css('top', $('.top-bar').height());
        }
    });

    // Navbar disappear on scroll down and appear on scroll up
    var prevScrollPos = $(window).scrollTop();
    var navbar = $('.navbar');

    $(window).scroll(function () {
        var currentScrollPos = $(window).scrollTop();
        if (prevScrollPos > currentScrollPos) {
            navbar.removeClass('navbar-hide');
        } else {
            navbar.addClass('navbar-hide').css('top', '-100px');
        }
        prevScrollPos = currentScrollPos;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.navbar').css('border-bottom', '0.30em var(--primary) solid');
        } else {
            $('.navbar').css('border-bottom', 'none');
        }
    });

    // Toggle navbar off when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('.navbar-collapse').collapse('hide');
            $('.navbar-collapse').removeClass('show');
        }
    });


    
/** END OF NAVBAR SCRIPTS **/
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

