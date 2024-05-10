jQuery(document).ready(function(){
  $('.instructional-slider-wrapper').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 300,
    
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]

    
    // variableWidth: true

  });

  jQuery('.prev').click(function(e){
    e.preventDefault();
    $('.instructional-slider-wrapper').slick('slickPrev');
  });

  $('.next').click(function(e){
    e.preventDefault();
    $('.instructional-slider-wrapper').slick('slickNext');
  });

  if (jQuery(window).width() > 991) {
    $('.instructional-slider-wrapper').on('afterChange', function(event, slick, currentSlide){    
      if (currentSlide + 1 === slick.slideCount - 3) {     
        $('.slider-nav').addClass('show-prev hide-next');
      } else {      
        $('.slider-nav').removeClass('show-prev hide-next');
      }    
    });
  }
  if (jQuery(window).width() < 991) {
    $('.instructional-slider-wrapper').on('afterChange', function(event, slick, currentSlide){    
      console.log("event" +" "+ +event);
      console.log(currentSlide + 1)
      // console.log("current-slide" +" "+ +currentSlide + 1);
      
      console.log("slick count" +" "+ +slick.slideCount)
      // if (currentSlide === slick.slideCount - 4) {     
      //   $('.slider-nav').addClass('show-prev hide-next');
      // } else {      
      //   $('.slider-nav').removeClass('show-prev hide-next');
      // }    
    });
  }
 
  
});