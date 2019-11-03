$(document).ready(function() {
  $(".owl-carousel.ui-projects").owlCarousel({
    items: 4,
    dots: false,
    autoplay: true,    
    smartSpeed: 3000, 
    loop: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1          
        },
        600:{
            items:2         
        },
        1000:{
            items:3            
        },
        1500:{
            items:4
        }
    }
  });
});

$(document).ready(function() {
  $(".owl-carousel.ui-testimonial").owlCarousel({
    items: 3,
    dots: true,
    margin: 36,
    loop: false,
    responsiveClass:true,
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
  });
});

var lastScrollTop = 0;

window.addEventListener("scroll", function(){  
   var st = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
   // console.log(st);
   if (st > lastScrollTop){
       document.getElementById("header_top").style.top = "-100%";
   } else {
      document.getElementById("header_top").style.top = "0";
   }
   lastScrollTop = st;
}, false);

