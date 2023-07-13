jQuery(function(){
    console.log('hi');



  console.log($(window).scrollTop());
   var bottom  = Math.floor($('.addmission-container').offset().top) + Math.floor($('.addmission-container').outerHeight(true))
 var flag = true
 if ( Math.floor($(window).scrollTop()) >= Math.floor($('.addmission-container').offset().top) && Math.floor($(window).scrollTop()) <=bottom ) {
        
    if(flag){
        $('.counter-value').each(function () {
            console.log($(this).prop('Counter',0));
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    flag = false 
}
  var $w = $(window).scroll(function () {
    console.log(Math.floor($w.scrollTop()));
    if (Math.floor($w.scrollTop()) >= Math.floor($('.addmission-container').offset().top) && Math.floor($(window).scrollTop()) <=bottom ) {
        
        if(flag){
            $('.counter-value').each(function () {
                console.log($(this).prop('Counter',0));
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
        flag = false 
    }
});

   

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    })
})