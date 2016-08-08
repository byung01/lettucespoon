$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 1500,
        outDuration: 1000,
        linkElement: '.animsition-link',
        // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
        loading: true,
        loadingParentElement: 'body', //animsition wrapper element
        loadingClass: 'animsition-loading',
        loadingInner: '', // e.g '<img src="loading.svg" />'
        timeout: false,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
        // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
        transition: function(url){ window.location.href = url; }
    });

    /* Dropdowns will open when hovered in the navbar */
    var browser_width = $(window).width();
    if (browser_width > 767) {
        $(".navbar li.dropdown").mouseover(function () {
            $(this).addClass('open');
        }).mouseout(function () {
            $(this).removeClass('open');
        }).click(function () {
            $(this).removeClass('open');
        });

        /* Navbar menu will close when any of the links are clicked on */
        $('.nav').on('click', function (event) {
            if ( $(event.target).is('a') ) {
                $('.navbar-collapse').collapse('hide');
            }
        });
    }
    /* On a mobile device, hovering will be disabled */
    else {
        /* Deleting all the links on the navbar */
        var navbar_links = $('li.dropdown').children('a');
        var num_of_links = $('li.dropdown').children('a').length;
        for (var i = 0; i < num_of_links; i++) {
            navbar_links[i].href = '#';
        }

        /* Adding a click toggle for the dropdowns in the navbar */
        $('li.dropdown').on('click', function () {
            if ( $(this).hasClass('open') ) {
                $(this).removeClass('open');
            }
            else {
                $(this).addClass('open');
            }
        });
    }
});
