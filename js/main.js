function slidechange(){
  $('.instructional-slider-wrapper').on('afterChange', function(event, slick, currentSlide){   
    if ($('.slick-next').hasClass('slick-disabled')) {
       $('.slider-nav').addClass('show-prev hide-next');
     }
     else{
       $('.slider-nav').removeClass('show-prev hide-next');
     }
     if ($('.slick-prev').hasClass('slick-disabled')) {
       $('.slider-nav').removeClass('show-prev');
     }
     else{
       $('.slider-nav').addClass('show-prev');
     } 
   });

  if (jQuery(window).width()  > 991){
    $('.instructional-slider-wrapper').on('afterChange', function(event, slick, currentSlide){
      currentSlide = currentSlide + 1;
      jQuery(".prev").find(".from").text(currentSlide - 4);
      jQuery(".prev").find(".to").text(currentSlide - 1);
      jQuery(".next").find(".from").text(currentSlide + 4);
      jQuery(".next").find(".to").text(currentSlide + 7);
      
   });
    }
    if (jQuery(window).width()  < 991){
      $('.instructional-slider-wrapper').on('afterChange', function(event, slick, currentSlide){
        currentSlide = currentSlide + 1;
        jQuery(".prev").find(".from").text(currentSlide - 2);
        jQuery(".prev").find(".to").text(currentSlide - 1);
        jQuery(".next").find(".from").text(currentSlide + 2);
        jQuery(".next").find(".to").text(currentSlide + 3);
        
     });
     
    }
    if(jQuery(window).width()  < 575){
      $('.instructional-slider-wrapper').on('afterChange', function(event, slick, currentSlide){
        currentSlide = currentSlide + 1;
        console.log(currentSlide);
        jQuery(".prev").find(".to").text(currentSlide - 1);
        jQuery(".next").find(".from").text(currentSlide + 1)
      });
    }
    
}

jQuery(document).ready(function(){
  slidechange();
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
 
  


});
jQuery(window).resize(function(){
slidechange();
})