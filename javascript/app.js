
$(document).ready(function () {

    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

    let options = {
        textColour: '#05ff11',
        textHeight: '12',
        imageAlign: 'centre',
        shuffleTags: true,
        noMouse: false,
        shadow: null,
        initial: [0.1, 0.2],
        minSpeed: 0.8,
        noSelect: true,
        wheelZoom: false
    };

    window.onload = function () {
        TagCanvas.Start('myCanvas', '', options);
    };
});