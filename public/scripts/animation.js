$(document).ready(function () {
    $('#carousel-photoroll').carousel({
        interval: 5000,
        pause: false
    });

    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800,
        offsetTop: 50
    });

    $('.nav a').on('click', function(){
        $('.navbar-toggle').click()
    });
});