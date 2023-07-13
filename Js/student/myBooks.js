jQuery(function(){

  
    $(".track-1").owlCarousel({
      responsiveClass:true,
      margin :30 ,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:6,
              nav:true,
              loop:false
          }
      }
    });
    $(".track-2").owlCarousel({
      responsiveClass:true,
      nav :true ,
      margin :30 ,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:6,
              nav:true,
              loop:false
          }
      }
    });
  
  
    $('.owl-carousel').each(function(){
      if(!$(this).find('div').hasClass('owl-item')){
        
        $(this).next('.emptyMessage').removeClass('d-none')
      }
    })
  
    $('.next-btn').click(function(){
      $(this).closest('.col-12').next('.col-12').find('.owl-next').click()
    })
    $('.prev-btn').click(function(){
      $(this).closest('.col-12').next('.col-12').find('.owl-prev').click()
    })
  
  })