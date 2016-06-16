$(document).ready(function () {
    /* Updating navbar links for the Home Page */
    $('a.navbar-brand').removeClass('animsition-link').addClass('anchor-scroll').attr('href','#home');

    /* Adding animations for photo carousel */
    $('#carousel-photoroll').carousel({
        interval: 5000,
        pause: false
    });

    /* Adding anchor scroll animation */
    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800,
        offsetTop: 50
    });
});
