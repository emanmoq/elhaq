jQuery(function ($) {
  $(window).scroll(function () {

    scrollTop = $(window).scrollTop();

     if (scrollTop > $('header').height()) {

      $('header').addClass('scrollNav');
    }
    else{ 
      $('header').removeClass('scrollNav');
    }
  

     if ($(window).width() < 1024 && $(window).width() > 767) {
      if (scrollTop > $(".categories").height()) {
        $(".navbar.navbar-expand-lg").css("margin-right", "200px");
        $(".categBtn").css("display", "block");
      }
      else {
        $(".categBtn").css("display", "none");
        $(".navbar.navbar-expand-lg").css("margin-right", "0");
      }

    }
    else if ($(window).width() < 1200 && $(window).width() > 1024) {
      if (scrollTop > $(".categories").height()) {
        $(".navbar.navbar-expand-lg").css("margin-right", "244px");
        $(".categBtn").css("display", "block");
      }
      else {
        $(".categBtn").css("display", "none");
        $(".navbar.navbar-expand-lg").css("margin-right", "0");
      }

    }
  

    else if ($(window).width() > 1200) {
      if (scrollTop > $(".categories").height()) {
        $(".navbar.navbar-expand-lg").css("margin-right", "350px");
        $(".categBtn").css("display", "block");
      }
      else {
       
        $(".categBtn").css("display", "none");
        $(".navbar.navbar-expand-lg").css("margin-right", "0");
      }
      
    }

    if (scrollTop -200  > 0) {
      $('.up').stop().animate({
        opacity: 1
      }, 100);// show the button
  } else {
      $('.up').stop().animate({
        opacity: 0
      }, 250);// hide the button
  }
  });

      if ($(window).width() < 767) {

      $(".clientinfo").click(function () {
        $("#v-pills-tab").toggle();
      });
      $("#v-pills-tab .nav-link").click(function () {
        $("#v-pills-tab").toggle();
      });

    }

  $('.heroSlider').owlCarousel({
    nav: true,
    loop: true,
    dots: true,
    rtl: true,
    navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],

    responsive: {
      0: {
        items: 1
      },

    }
  });
  $('.heroSlider').owlCarousel({
    nav: true,
    loop: true,
    dots: true,
    rtl: true,
    navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],

    responsive: {
      0: {
        items: 1
      },

    }
  });
  $('.categSlider').owlCarousel({
    nav: true,
    loop: true,
    dots: false,
    items:6,
    margin:15,
    rtl:true,
    navText: ['<i class="lni lni-arrow-right"></i>', '<i class="lni lni-arrow-left"></i>'],
    responsive:{
      0:{
        items:3
      },
      600:{
        items:5
      }
    }
  });

  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").collapse("show");
    $('.bodyoverlay').css("display", "block");
    $('.navbar-collapse').css("display", "block");
   
  });

  $('.close').click(function () {
    $(".navbar-collapse").collapse("hide");
    $('.bodyoverlay').css("display", "none")
  });
  $('.bodyoverlay').click(function () {
    $(".navbar-collapse").collapse("hide");
    $(".bodyoverlay").css("display", "none");
    $('.mobileSearchSection').css("display", "none");
  });
  $(".MobilesearchIcon").click(function () {
    $('.mobileSearchSection').css("display", "block");
    $('.bodyoverlay').css("display", "block");

  });
  $(".editForm").click(function () {
$(this).parent().find('input').prop("readonly", false);
$(this).parent().find('input').focus();
inputval = $(this).parent().find('input').val();
$(this).parent().find('input').val(inputval);
  });
$(".addNewAddress").click(function(){
  $(this).css("display","none");
  $(".AddAdressForm").css("display","block");
})
$(".toggle-group label").html("")
$(".close").click(function(){
  $(this).parent().css("display","none")
})
$(".close").click(function(){
  $(this).parent().css("display","none")
})
$(".attachments .close").click(function(){
  $(this).parent().parent().css("display","none")
});
$("#notificationDropDown").click(function(){
  $(".notfyDropDown ").toggle();
})
$("body").click(function(){$(".notfyDropDown").css("display","none")});
});