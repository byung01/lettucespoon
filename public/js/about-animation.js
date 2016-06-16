$(document).ready(function () {
    /* Updating navbar links for the About Page */
    var about_dropdown = $('#about a');
    for (var i = 0; i < about_dropdown.length; i++) {
        $(about_dropdown[i]).removeClass('animsition-link').addClass('anchor-scroll');
        switch(i) {
            case 0:
                $(about_dropdown[i]).attr('href','#writer');
                break;
            case 1:
                $(about_dropdown[i]).attr('href','#writer');
                break;
            case 2:
                $(about_dropdown[i]).attr('href','#inspiration');
        };
    }

    /* Adding anchor scroll animation */
    $('.anchor-scroll').anchorScroll({
        scrollSpeed: 800,
        offsetTop: 50
    });
});
