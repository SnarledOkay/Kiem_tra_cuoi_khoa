$(document).ready(function(){
    $('.basic-demo-1').owlCarousel({
        loop:true,
        margin:44,
        nav:false,
        autoplay: true ,
        dots: false, 
        autoplayTimeout: 1000, 
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
    $('.basic-demo-2').owlCarousel({
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

// $(document).ready(function(){
    
// });

