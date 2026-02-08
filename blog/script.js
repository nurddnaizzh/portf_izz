$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        // show height 100em for nav
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');
    });
});