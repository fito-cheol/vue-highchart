<template>
  <div>
    <highcharts :constructorType="'stockChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/stock/demo/responsive
import axios from 'axios'
export default {
  data() {
    return {
      chartOptions: {

        chart: {
            height: 400
        },

        title: {
            text: 'Highstock Responsive Chart'
        },

        subtitle: {
            text: 'Click small/large buttons or change window size to test responsiveness'
        },

        rangeSelector: {
            selected: 1
        },

        series: [{
            name: 'AAPL Stock Price',
            data: [],
            type: 'area',
            threshold: null,
            tooltip: {
                valueDecimals: 2
            }
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    chart: {
                        height: 300
                    },
                    subtitle: {
                        text: null
                    },
                    navigator: {
                        enabled: false
                    }
                }
            }]
        }
    }
    };
  },
  created() {
    // data를 나중에 할당하는 경우에는 range를 다시 설정해줘야한다
    axios.get('https://demo-live-data.highcharts.com/aapl-c.json')
      .then(response => {
        this.chartOptions.series[0].data = response.data
      })
  },
  
};
</script>
