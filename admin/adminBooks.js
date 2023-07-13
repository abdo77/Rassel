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
  })

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
  colors:['rgb(10,179,156)'],
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

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();

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
  colors:['#f06548'],
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

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();


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
  colors:['rgb(10,179,156)'],
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

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();


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
  colors:['rgb(10,179,156)'],
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

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();

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
  colors:['rgb(10,179,156)'],
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

  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();