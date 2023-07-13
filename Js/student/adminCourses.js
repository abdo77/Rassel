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
  series: [95],
  colors:[ '#249485'],
  chart: {
  width: '105',
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
          size: "70%"
      },
      track: {
          margin: 1
      },
      dataLabels: {
          show: !0,
          name: {
              show: !1
          },
          value: {
              show: !0,
              fontSize: "16px",
              fontWeight: 600,
              offsetY: 8
          }
      }
  }
},

};
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  

  var options = {
    series: [79],
    colors:[ '#249485'],
    chart: {
    width: '105',
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
            size: "70%"
        },
        track: {
            margin: 1
        },
        dataLabels: {
            show: !0,
            name: {
                show: !1
            },
            value: {
                show: !0,
                fontSize: "16px",
                fontWeight: 600,
                offsetY: 8
            }
        }
    }
  },
  
  };
    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
  
    

    var options = {
      series: [50],
      colors:[ '#249485'],
      chart: {
      width: '105',
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
              size: "70%"
          },
          track: {
              margin: 1
          },
          dataLabels: {
              show: !0,
              name: {
                  show: !1
              },
              value: {
                  show: !0,
                  fontSize: "16px",
                  fontWeight: 600,
                  offsetY: 8
              }
          }
      }
    },
    
    };
      var chart = new ApexCharts(document.querySelector("#chart3"), options);
      chart.render();


      var options = {
        series: [50],
        colors:[ '#f07b62'],
        chart: {
        width: '105',
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
                size: "70%"
            },
            track: {
                margin: 1
            },
            dataLabels: {
                show: !0,
                name: {
                    show: !1
                },
                value: {
                    show: !0,
                    fontSize: "16px",
                    fontWeight: 600,
                    offsetY: 8
                }
            }
        }
      },
      
      };
        var chart = new ApexCharts(document.querySelector("#chart4"), options);
        chart.render();
    
        var options = {
          series: [50],
          colors:[ '#249485'],
          chart: {
          width: '105',
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
                  size: "70%"
              },
              track: {
                  margin: 1
              },
              dataLabels: {
                  show: !0,
                  name: {
                      show: !1
                  },
                  value: {
                      show: !0,
                      fontSize: "16px",
                      fontWeight: 600,
                      offsetY: 8
                  }
              }
          }
        },
        
        };
          var chart = new ApexCharts(document.querySelector("#chart5"), options);
          chart.render();

          var options = {
            series: [50],
            colors:[ '#f07b62'],
            chart: {
            width: '105',
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
                    size: "70%"
                },
                track: {
                    margin: 1
                },
                dataLabels: {
                    show: !0,
                    name: {
                        show: !1
                    },
                    value: {
                        show: !0,
                        fontSize: "16px",
                        fontWeight: 600,
                        offsetY: 8
                    }
                }
            }
          },
          
          };
            var chart = new ApexCharts(document.querySelector("#chart6"), options);
            chart.render();