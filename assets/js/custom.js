$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,// vòng lặp
        margin :10, // khoảng cách item
        nav:false, // thanh điều hướng 
        autoplay: true, //tự động chạy
        autoplayTimeout: 2000, // thời gian chạy
        dots: false ,// bỏ dấu chấm số thứ tự
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
  });