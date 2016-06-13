$(document).ready(function () {
    $('#carousel-photoroll').carousel({
        interval: 5000,
        pause: false
    });

    $('.nav').on('click', function (event) {
        if ( $(event.target).is('a.anchor-scroll') ) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});
