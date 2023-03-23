'use strict';
/*------------------- Map  -------------------*/
import $ from 'jquery';


function initMap() {
    const google = window.google;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: { lat: 38.897957, lng: -77.036560 }
    });

    var image = 'assets/img/icons/map.png';

    var beachMarker = new google.maps.Marker({
        position: { lat: 38.897957, lng: -77.036560 },
        map: map,
        icon: image
    });
}

function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var w1 = 40;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var w2 = 40;
    var r2 = x2 + w2;
    if (r1 < x2 || x1 > r2)
        return false;
    return true;
}

// $(function () {

//     var price_range = $('#price-range');
//     var price_range_both = $('.price-range-both');

//     /*------------------- Price Range Slider  -------------------*/
//     if (price_range.length > 0) {

//         // slider call

//         price_range.slider({
//             range: true,
//             min: 10,
//             max: 1000,
//             values: [10, 1000],
//             slide: function (event, ui) {

//                 $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
//                 $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
//                 price_range_both.html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);
//                 //

//                 if (ui.values[0] === ui.values[1]) {
//                     $('.price-range-both i').css('display', 'none');
//                 } else {
//                     $('.price-range-both i').css('display', 'inline');
//                 }

//                 //

//                 if (collision($('.price-range-min'), $('.price-range-max')) === true) {
//                     $('.price-range-min, .price-range-max').css('opacity', '0');
//                     price_range_both.css('display', 'block');
//                 } else {
//                     $('.price-range-min, .price-range-max').css('opacity', '1');
//                     price_range_both.css('display', 'none');
//                 }

//             }
//         });
//         $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + price_range.slider('values', 0) + ' - </i>' + price_range.slider('values', 1) + '</span>');
//         $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + price_range.slider('values', 0) + '</span>');
//         $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + price_range.slider('values', 1) + '</span>');
//     }
// });

$(function ($) {


    // c
    var left_sidebar = $(".left-sidebar");
    var admin_home_content =$(".admin-home-content");
    var collapse_l = $(".collapse-l");
    var clicked = false;
    collapse_l.on('click', function (e) {
        if(clicked===false){
            left_sidebar.removeClass("col-2");
            left_sidebar.addClass("col-1");
            admin_home_content.removeClass("col-10");
            admin_home_content.addClass("col-11");
            collapse_l.removeClass("fa-arrow-left");
            collapse_l.addClass("fa-arrow-right");
            clicked = !clicked;
        }else{
            left_sidebar.removeClass("col-1");
            left_sidebar.addClass("col-2");
            admin_home_content.removeClass("col-11");
            admin_home_content.addClass("col-10");
            collapse_l.removeClass("fa-arrow-right");
            collapse_l.addClass("fa-arrow-left");
            clicked = !clicked;
        }
        
        e.preventDefault();
    });

    /*------ Megamenu Toggle  --------*/
    $('.menu-toggle').on('click', function (e) {
        $(".mega-dropdown-menu").toggleClass('open');
        e.preventDefault();
    });

    /*------ Main Menu Toggle at responsive --------*/
    var responsive_toggle = $('.responsive-toggle');
    responsive_toggle.on('click', function (e) {
        $("body").toggleClass('off-canvas-body');
        responsive_toggle.toggleClass("fa-bars fa-close");
        e.preventDefault();
    });

    /*------ Custom Scroll Style --------*/
    var scroll_js = $('.scroll-js');
    var $window = $(window);
    if ($window.width() < 1200) {
        if (scroll_js.length > 0) {
            scroll_js.mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
    }




    /*------ Countdown  --------*/
    if ($().countdown) {
        // var newYear = new Date();
        // newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
        // $('#defaultCountdown').countdown({since: new Date(2017, 1 - 1, 5)});
        var newYear = new Date();
        newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1);
        $('#defaultCountdown').countdown({ until: newYear });
    }

    /*------ Page to top  --------*/
    $('.to-top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });

    /*------ Subscribe Popup --------*/
    var subscribe_popups = $('#subscribe-popups');
    if (subscribe_popups.length > 0) {
        subscribe_popups.subscribeBetter({
            trigger: "onidle", // You can choose which kind of trigger you want for the subscription modal to appear. Available triggers are "atendpage" which will display when the user scrolls to the bottom of the page, "onload" which will display once the page is loaded, and "onidle" which will display after you've scrolled.
            animation: "flyInDown", // You can set the entrance animation here. Available options are "fade", "flyInRight", "flyInLeft", "flyInUp", and "flyInDown". The default value is "fade".
            delay: 0, // You can set the delay between the trigger and the appearance of the modal window. This works on all triggers. The value should be in milliseconds. The default value is 0.
            showOnce: true, // Toggle this to false if you hate your users. :)
            autoClose: false, // Toggle this to true to automatically close the modal window when the user continue to scroll to make it less intrusive. The default value is false.
            scrollableModal: false      //  If the modal window is long and you need the ability for the form to be scrollable, toggle this to true. The default value is false.
        });
    }

    //Main Slider carousel 



    /*------ Product Sliders --------*/
 
  
    // $(".product-slider-1").owlCarousel({
    //     dots: true,
    //     loop: false,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: false,
    //     navigator:true,
    //     margin: 0,
    //     responsive: {
    //         0: { items: 1 },
    //         1500: { items: 6 },
    //         1200: { items: 5 },
    //         992: { items: 3 },
    //         600: { items: 2 }
    //     }
    // });
    // $(".naturix-slider-1").owlCarousel({
    //     dots: true,
    //     loop: false,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: false,
    //     margin: 0,
    //     responsive: {
    //         0: { items: 1 },
    //         1200: { items: 4 },
    //         992: { items: 3 },
    //         600: { items: 2 }
    //     }
    // });
    // $('.slider-mega-menu').owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: true,
    //     nav: false,
    //     margin: 1,
    //     responsive: {
    //         0: { items: 1 },
    //         1200: { items: 5 },
    //         992: { items: 3 },
    //         768: { items: 3 },
    //         568: { items: 2 }
    //     }
    // });
    // $(".deal-slider").owlCarousel({
    //     dots: true,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: false,
    //     margin: 30,
    //     responsive: {
    //         0: { items: 1 },
    //         1500: { items: 2 },
    //         1200: { items: 2 },
    //         992: { items: 2 }
    //     }
    // });
    // $("#new-arrivals").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1024: { items: 1 },
    //         768: { items: 2 }
    //     }
    // });
    // $("#best-seller").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1024: { items: 1 },
    //         768: { items: 2 }
    //     }
    // });
    // $("#customer-needs").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1024: { items: 1 },
    //         768: { items: 2 }
    //     }
    // });
    // $("#new-arrivals-block").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1200: { items: 3 },
    //         992: { items: 2 },
    //         768: { items: 3 },
    //         480: { items: 2 }
    //     }
    // });
    // $("#best-seller-block").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1200: { items: 3 },
    //         992: { items: 2 },
    //         768: { items: 3 },
    //         480: { items: 2 }
    //     }
    // });
    // $("#testimonial-slider").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1500: { items: 2 },
    //         1200: { items: 2 },
    //         992: { items: 2 },
    //         600: { items: 2 }
    //     }
    // });
    // $("#rel-prod-slider").owlCarousel({
    //     dots: false,
    //     loop: true,
    //     autoplay: false,
    //     autoplayHoverPause: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 0,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1200: { items: 3 },
    //         568: { items: 2 }
    //     }
    // });

    // $("#naturix-slider").owlCarousel({
    //     animateIn: 'fadeInDown',
    //     animateOut: 'slideOutUp',
    //     dots: false,
    //     loop: true,
    //     autoplay: true,
    //     smartSpeed: 100,
    //     nav: true,
    //     margin: 30,
    //     items: 1,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i>",
    //         "<i class='fa fa-long-arrow-right'></i>"
    //     ],
    //     responsive: {
    //         0: { items: 1 },
    //         1024: { items: 1 }
    //     }
    // });
    /*------ Product Single Slider --------*/
    // $(document).on('shown.bs.modal', function () {
    //     $(this).find('.sync1, .sync2').each(function () {
    //         $(this).data('owlCarousel') ? $(this).data('owlCarousel').onResize() : null;
    //     });
    // });
    // var sync1 = $(".sync1");
    // var sync2 = $(".sync2");
    // var navSpeedThumbs = 500;
    // sync2.owlCarousel({
    //     rtl: false,
    //     items: 3,
    //     nav: true,
    //     navSpeed: navSpeedThumbs,
    //     responsive: {
    //         0: { items: 1 },
    //         480: { items: 3 }
    //     },
    //     responsiveRefreshRate: 200,
    //     navText: [
    //         "<i class='fa fa-long-arrow-left'></i> PREV",
    //         "NEXT <i class='fa fa-long-arrow-right'></i>"
    //     ]
    // });
    // sync1.owlCarousel({
    //     rtl: false,
    //     items: 1,
    //     navSpeed: 1000,
    //     nav: false,
    //     onChanged: syncPosition,
    //     responsiveRefreshRate: 200

    // });
    // function syncPosition(el) {
    //     var current = this._current;
    //     sync2.find(".owl-item").removeClass("synced").eq(current).addClass("synced");
    //     center(current);
    // }

    // sync2.on("click", ".owl-item", function (e) {
    //     e.preventDefault();
    //     var number = $(this).index();
    //     sync1.trigger("to.owl.carousel", [number, 1000]);
    // }, { passive: false });
    // function center(num) {
    //     var sync2visible = sync2.find('.owl-item.active').map(function () {
    //         return $(this).index();
    //     });
    //     if ($.inArray(num, sync2visible) === -1) {
    //         if (num > sync2visible[sync2visible.length - 1]) {
    //             sync2.trigger("to.owl.carousel", [num - sync2visible.length + 2, navSpeedThumbs, true]);
    //         } else {
    //             sync2.trigger("to.owl.carousel", Math.max(0, num - 1));
    //         }
    //     } else if (num === sync2visible[sync2visible.length - 1]) {
    //         sync2.trigger("to.owl.carousel", [sync2visible[1], navSpeedThumbs, true]);
    //     } else if (num === sync2visible[0]) {
    //         sync2.trigger("to.owl.carousel", [Math.max(0, num - 1), navSpeedThumbs, true]);
    //     }
    // }
});

$(window).on('load', function () {
    /*--------- Page Loader ---------*/
    setTimeout(function () {
        $("#loading").fadeOut(300);
    }, 3100);
});

$(window).scroll(function () {

    /*--------- Sticky Header ---------*/
    var main_header = $('.main-header');
    if ($(this).scrollTop() > 1) {
        main_header.addClass('is-sticky');
    }
    else {
        main_header.removeClass('is-sticky');
    }

    /*--------- Page to top ---------*/
    var to_top_mb = $('.to-top.mb');
    if ($(this).scrollTop() > 100) {
        to_top_mb.fadeIn();
    } else {
        to_top_mb.fadeOut();
    }

    var $window = $(window);
    if ($window.scrollTop() + $window.height() > $(document).height() - 200) {
        to_top_mb.fadeOut();
    }

});


// 
    
    