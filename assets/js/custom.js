$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:44,
        nav:false,
        autoplay: true ,
        dots: false, 
        autoplayTimeout: 2000, 
        autoplaySpeed: 2000,
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
});

$(document).ready(function(){
    $('.bestseller-items-scroll').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots: false, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    }) ;
});

