jQuery(function(){
    $('.counter-value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              // $(this).text(Math.ceil(now));
             $(this).text(Math.ceil(now).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
          }
      });
  });

  $('.swiper-slide').each(function(){
    var index = $(this).index()+1
    if($(this).find('span').hasClass('text-success')){
      console.log('success');
      var options = {
        series: [{
            name: "Bitcoin",
            data: [85, 68, 35, 90, 8, 11, 26, 54]
        }],
        chart: {
        width: '100%',
        height:50,
        type: 'area',
        toolbar:{
            show:false
          },
          sparkline: {
            enabled: !0
        },
      },
      colors:['#0ab39c'],
      legend:{
        show:false
      },
      grid:{
        show:false
      },
      dataLabels: {
        enabled: false
      },
      
      stroke: {
        curve: 'smooth',
        width: 1.5
      },
      fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [50, 100, 100, 100]
        }
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        labels :{
            show: false,
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        },
    },    
      tooltip: {
        show:false ,
       
      },
      };
    }
    else if($(this).find('span').hasClass('text-danger')){
      var options = {
        series: [{
            name: "Bitcoin",
            data: [85, 68, 35, 90, 8, 11, 26, 54]
        }],
        chart: {
        width: '100%',
        height:50,
        type: 'area',
        toolbar:{
            show:false
          },
          sparkline: {
            enabled: !0
        },
      },
      colors:['#dc3545'],
      legend:{
        show:false
      },
      grid:{
        show:false
      },
      dataLabels: {
        enabled: false
      },
      
      stroke: {
        curve: 'smooth',
        width: 1.5
      },
      fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: .45,
            opacityTo: .05,
            stops: [50, 100, 100, 100]
        }
    },
    yaxis: {
        show: false,
    },
    xaxis: {
        labels :{
            show: false,
        },
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        },
    },    
      tooltip: {
        show:false ,
       
      },
      };
    
    }
  var chart = new ApexCharts(document.querySelector("#chart"+index+""), options);
  chart.render();
  })


  })

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: !1,
    spaceBetween: 24,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: !1
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 5
        }
    }
    
  });
  


