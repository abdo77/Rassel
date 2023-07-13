var options = {
    series: [

        {
            name: 'Earnings',
            type: 'area',
            
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
            color:'rgb(64, 81, 137)',
              
        
          },
        {
    name: 'Orders',
    type: 'column',
    data: [40, 55, 44, 61, 27, 43, 21, 32, 72, 30, 27, 10],
    color:'rgb(10, 179, 156)'

},

  {
    name: 'Refunds',
    type: 'line',

    data: [23, 0, 31, 57, 13, 22, 17, 31, 22, 22, 12, 16],
    color : 'rgb(240, 101, 72)',
    
  }
  
],
    tooltip :{
        enabled:false 
    },
    chart: {
    height: 350,
    type: 'line',
    toolbar: {
        show:false
    }
  },
  grid:{
    show:false
  },
  stroke: {
    width : [2,0,2],
    dashArray: [0,0,10],
  },
  plotOptions: {
    bar: {
      columnWidth: '30%'
    }
  },
  fill: {
    type :['gradient'],
    opacity: [0.85, 0.25, 1],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.5,
      stops: [0, 100, 100, 100]
    }
  },
  dataLabels: {
    enabled: false,

  },
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
  xaxis: {
    type: 'date'
  },
  yaxis: [{
    
  
  }, ]
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 10,
    mousewheel: !0,
    loop: !0,
    direction: "vertical",
    autoplay: {
        delay: 2500,
        disableOnInteraction: !1
    },
    
  });