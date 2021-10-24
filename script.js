$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 120) {
            $('#navbarlight').slideDown(700);
        } else {
            $('#navbarlight').fadeOut(250);
        }
    });



    $('.owl-1').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('.owl-2').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 4

            }
        }
    })
});