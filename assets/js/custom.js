$(document).ready(function(){
    $('.brand-of-banner').owlCarousel({
        loop:true,
        margin:44,
        nav:false,
        autoplay: true ,
        dots: false, 
        autoplayTimeout: 3000, 
        autoplaySpeed: 3000,
        slideTransition:'linear',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('.bestseller-items-scroll').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    }) ;
});
