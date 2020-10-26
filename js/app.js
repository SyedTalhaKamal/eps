// Serve
$('.serve-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    center:true,
    navText : ["<img src='./images/serve-back.png' class='arrows'>","<img src='./images/serve-forward.png' class='arrows'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
//Serve end
//Our products
$('.our-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:true,
    center:true,
 
    navText : ["<img src='./images/back.png' class='arrows'>","<img src='./images/forward.png' class='arrows'>"],
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
})
//Our products End
// testimonial
$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:true,
    center:true,
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
// testimonial End
