// open menu toggle for mobile/tablet screen
$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        // show height 100em for nav
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });

    // Slick carousel initialization
    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });
});