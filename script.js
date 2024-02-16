$(document).ready(function() {
    $('#first-carousel').slick({
        asNavFor: '#second-carousel'
    });

    $('#second-carousel').slick({
        asNavFor: '#first-carousel',
        dots: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
        ]
    });
});
