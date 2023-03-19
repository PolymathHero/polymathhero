$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header.sticky-nav').addClass('nav-bg');
    } else {
        $('header.sticky-nav').removeClass('nav-bg');
    }
});
