$(document).ready(function () {
    
    
    $('[data-category]').each(function(){
       var color = $(this).data('category');
       if($(this).hasClass('category-bg')){
           $(this).css('background-color', color);
       }
       $(this).find('.category-bg').css('background-color', color);
       $(this).find('.category-color').css('color', color);
       $(this).find('.category-border').css('border-color', color);
        
    });

    $(".navbar-nav .fa").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("fa-plus fa-close");
        $(this).parent().next(".sub-menu").slideToggle();
    });

    $(".show-search").click(function (e) {
        e.preventDefault();
        $(".navbar .search-form").slideToggle();
    });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass('active');
    });
//    $(".navbar .dropdown").mouseout(function (){
//        $(this).find('.dropdown-menu').hide();
//    });

    if ($(".owl-carousel").length > 0) {
        
        //SUBMENU SLIDER FOR RESOLUTION > 768px
        $(".category-menu").owlCarousel({
            margin: 0,
            loop: false,
            autoWidth: true,
            nav: false,
            dots: false
        });
    
    //HOROSCOPE SLIDER
        $(".latest-articles").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            margin: 0,
            autoplay:false,
            autoplayTimeout:5000
            
            
        });
    
        //HOROSCOPE SLIDER
        $(".horoscope-slider").owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            if (pozicija < scroll + windowHight - 100) {
                $(this).addClass(animacija);
            }
        });

    }

    animation();

    $(window).scroll(function () {
        animation();
    });

    //CUSTOM SCROOLBAR
    if ($('.custom-scrool').length > 0) {
        $(".custom-scrool").mCustomScrollbar({
            theme:"minimal-dark"
        });
    }


});