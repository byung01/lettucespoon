$(document).ready(function () {
    $('#carousel-photoroll').carousel({
        interval: 3000,
        pause: false
    });

    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800,
        offsetTop: 50
    });
});