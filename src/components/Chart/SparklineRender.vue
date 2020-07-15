<script>

  export default{
    name: 'reder-chart',
    props:{
        'dataSparkline':{
          type:Array,
          default: () => [1,2,3,4]
        },
        'chartType':{
            type: String,
            default: 'area'
        }
    },
    
    // <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    render(createElement){
      const chartOptions = {
                  series: [{
                      data: this.dataSparkline,
                      pointStart: 1
                  }],
                  chart: {
                      backgroundColor: null,
                      borderWidth: 0,
                      type: this.chartType,
                      margin: [2, 0, 2, 0],
                      width: 120,
                      height: 20,
                      style: {
                          overflow: 'visible'
                      },

                      // small optimalization, saves 1-2 ms each sparkline
                      skipClone: true
                  },
                  title: {
                      text: ''
                  },
                  credits: {
                      enabled: false
                  },
                  xAxis: {
                      labels: {
                          enabled: false
                      },
                      title: {
                          text: null
                      },
                      startOnTick: false,
                      endOnTick: false,
                      tickPositions: []
                  },
                  yAxis: {
                      endOnTick: false,
                      startOnTick: false,
                      labels: {
                          enabled: false
                      },
                      title: {
                          text: null
                      },
                      tickPositions: [0]
                  },
                  legend: {
                      enabled: false
                  },
                  tooltip: {
                      hideDelay: 0,
                      outside: true,
                      shared: true,
                      pointFormat: '<b>{point.y}.000</b> USD'
                  },
                  plotOptions: {
                      series: {
                          animation: false,
                          lineWidth: 1,
                          shadow: false,
                          states: {
                              hover: {
                                  lineWidth: 1
                              }
                          },
                          marker: {
                              radius: 1,
                              states: {
                                  hover: {
                                      radius: 2
                                  }
                              }
                          },
                          fillOpacity: 0.25
                      },
                      column: {
                          negativeColor: '#910000',
                          borderColor: 'silver'
                      }
                  }
              }
      return createElement(
        "highcharts",
        {
          props:{
            options:chartOptions
          }
        }
      )
    },
  }
</script>