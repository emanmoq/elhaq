jQuery(function ($) {
  $(window).scroll(function () {
      
    scrollTop = $(window).scrollTop();

    if (scrollTop > $('header').height()) {
       
        $('header').addClass('scrollNav');
  }
    else if(scrollTop > $(".categories").height()){
      $(".navbar.navbar-expand-lg").css("margin-right","350px");
      $(".categBtn").css("display","block");
    }
    else {
        $('header').removeClass('scrollNav');
        $(".categBtn").css("display","none");
        $(".navbar.navbar-expand-lg").css("margin-right","0");
    }
  });
  

    $('.heroSlider').owlCarousel({
      nav:true,
        loop: true,
        dots: true,
        rtl:true,
        navText : ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],

        responsive:{
          0:{
            items : 1
          },
          768:{
            items:2
          },
          1025:{
            items:1
          }
        }
      });

      
      $('.categSlider').owlCarousel({
        loop: true,
        nav:true,
        dots: false,
        navText : ['<i class="fas fa-arrow-right"></i>','<i class="fas fa-arrow-left"></i>'],
        rtl:true,
        margin:17,
        responsive:{
          0:{
            items : 2
          },
          768:{
            items:4,
          },
          1025:{
            items:7
          }
        }
      });
      
}
);