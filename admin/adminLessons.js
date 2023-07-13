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
  $('.dropdown-btn').click(function(e){
    e.stopPropagation()
    e.preventDefault()
  })
  $('body').click(function(){
    $('main .dropdown-menu').removeClass('show')
    $('main .dropdown-btn').removeClass('show')
  })

  var tableChart = [
    {
        series :20 , 
        color : '#405189'
    },
    {
        series :80 , 
        color : '#ffc107'
    },
   
    
  ]

  for (let i = 0; i < tableChart.length; i++) {
    $('table tbody tr:nth-child('+ (i+1) +') td:last-child').append('<div id="table-chart'+(i+1)+'"></div>')
    
    var options = {
        chart: {
            height: 40,
            width:40 ,
            type: 'radialBar',
            sparkline: {
                enabled: !0
            },
            
            },
            dataLabels: {
              enabled: !1
            },
            plotOptions: {
              radialBar: {
                  hollow: {
                      margin: 0,
                      size: "50%"
                  },
                  track: {
                      margin: 1
                  },
                  dataLabels: {
                      show: false,
                      name: {
                          show: false
                      },
                      
                  }
              }
            },
            colors:[tableChart[i].color],
        series: [tableChart[i].series],
      }
    
    
    
      
      var chart = new ApexCharts(document.querySelector("#table-chart"+(i+1)+""), options);
      
      chart.render();  
}

  



 var options = {
    series: [125, 42, 58, 89],
labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
chart: {
    type: "donut",
    height: 230
},
plotOptions: {
    pie: {
        size: 100,
        offsetX: 0,
        offsetY: 0,
        donut: {
            size: "90%",
            labels: {
                show: !1
            }
        }
    }
},
dataLabels: {
    enabled: !1
},
legend: {
    show: !1
},
stroke: {
    lineCap: "round",
    width: 0
},
}
var chart = new ApexCharts(document.querySelector("#chart1"), options);
      
      chart.render();  
  })
  