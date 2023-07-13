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

  var map = new jsVectorMap({
    markers: [
        { name: 'Egypt', coords: [26.8206, 30.8025] ,style:{fill:'rgb(10,179,156)'}},
        { name: 'United Kingdom', coords: [55.3781, 3.4360] , style:{fill:'#405189'} },
        {
          name: 'United States',
          coords: [37.0902, -95.7129],
          // Add style for this particular marker
          // Keep in mind `style` object is merged with `markerStyle.initial`
          style: { fill: '#405189' }
        }
      ],    
    selector: "#map",
    map: "world",
    zoomButtons : false,
    onRegionTooltipShow(event, tooltip) {
        tooltip.css({ backgroundColor: '#405189'})
      }


  });



  var options = {
    series: [44, 55, 41, 17, 15],
    chart: {
    type: 'donut',
    width:'100%',
    height :'300px'
  },
  legend:{
    position:'bottom'
  },
  
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: '100%',
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();


