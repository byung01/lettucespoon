$(document).ready(function () {
    $('.arrow-prompt').hide();

    $('.glyphicon-arrow-left').mouseenter(function () {
        $('.arrow-prompt').fadeIn(500);
    }).mouseleave(function () {
        $('.arrow-prompt').fadeOut(500);
    });

    var old_url = document.referrer;
    $('.arrow-link').attr('href', old_url);
});
