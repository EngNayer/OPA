/// loading website

jQuery(window).load(function () {

    // PAGE LOADER

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

        $("body").css("overflow-y", "auto");

    });

    var Height = window.innerHeight;

    $("#map").height(Height);

    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});

// ADD IMAGE
$('.image-uploader').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close">&times;</button></div>');
    }
});

// REMOVE IMAGE
$('.images-upload-block').on('click', '.close',function (){
    $(this).parents('.uploaded-block').remove();
});

/// scrooltop nav-bar

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.Tab_mobile button').addClass('fading_scroll');
        $('.open_filter').addClass('go_filter');
    } else {
        // upscroll code
        $('.Tab_mobile button').removeClass('fading_scroll');
        $('.open_filter').removeClass('go_filter');
    }
    lastScrollTop = st;
});

/// Fade Password

$('.show_password i').click(function() {
    $(this).toggleClass('color_pink');
    $(this).toggleClass('fa-eye-slash');

    if( $(this).hasClass('color_pink') ) {
        $('.input_password').attr('type' , 'text');
    } else {
        $('.input_password').attr('type' , 'password');
    }
});

/// Scrool Nav

$('#nav-icon3').click(function(){
    $('#nav-icon3').toggleClass('open');
    $(".Nav_Mobile").toggleClass('back');
    $(".overlay").toggleClass('back');
    $("body").toggleClass('over_hidden');
});

$('.overlay, .click_search').click(function(){
    $('#nav-icon3').removeClass('open');
    $(".Nav_Mobile").removeClass('back');
    $(".overlay").removeClass('back');
    $("body").removeClass('over_hidden');
    $(".share_app").removeClass('fading_mobile animate-box');
});


$('.open_filter').click(function(){
    $(".section_filter").toggleClass('back');
    $(".overlay").toggleClass('back');
    $("body").toggleClass('over_hidden');
    $(this).fadeOut(200);
});


$(".map").slideUp('100');
$('.open_map').click(function(){
    $(".map").slideToggle('100');
});

$('.click_fav').click(function(){
    $(this).find(".act").toggleClass("active");
    $(this).find(".not_act").toggleClass("active");
});

$('.close_filter').click(function(){
    $(".section_filter").toggleClass('back');
    $(".overlay").toggleClass('back');
    $("body").toggleClass('over_hidden');
    $('.open_filter').fadeIn(200);
});

$('.user_head').click(function(event){
    event.preventDefault();
    $('.drop_user').toggleClass('active');
});

// Start Rate
var $star_rating = $('.star-rating span');

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('starGray').addClass('starYellow');
        } else {
            return $(this).removeClass('starYellow').addClass('starGray');
        }
    });
};

$star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();

//// add slider

$('#owl_img').owlCarousel({
    loop:false,
    margin:10,
    center:false,
    autoplay:true,
    pagination : true,
    autoplayTimeout: 2000,
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    dragEndSpeed: 2000,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('#owl_1').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    // autoplayTimeout: 100,
    // animateOut: 'bounceIn',
    // smartSpeed: 100,
    // dragEndSpeed: 100,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
              ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

$('#owl_customer').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    autoplay:true,
    // autoplayTimeout: 100,
    // animateOut: 'bounceIn',
    // smartSpeed: 100,
    // dragEndSpeed: 100,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

