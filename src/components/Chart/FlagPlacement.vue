<script>
// https://www.highcharts.com/demo/stock/flags-placement
import axios from 'axios'
  export default{
    name: 'flag-chart',
    props:{
    },
    data() {
      return {
        chartOptions : {
            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'USD to EUR exchange rate'
            },

            yAxis: [{
                title: {
                    text: 'Exchange rate'
                },
                top: '15%',
                height: '85%'
            }, {
                height: '15%'
            }],

            series: [{
                name: 'USD to EUR',
                data: [[1594387800000, 383.68]],
                id: 'dataseries',
                tooltip: {
                    valueDecimals: 4
                }
            }]
        },
        lastDate: null,
        days: null,
      }
    },
    render(createElement){
      return createElement(
        "highcharts",
        {
          props:{
            options:this.chartOptions,
            constructorType:'stockChart'
          },
          ref: 'flagChart'
        }
      )
    },
    created() {
      axios.get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json')
        .then(response => {
          let data = response.data
          this.chartOptions.series[0].data = data
          this.lastDate = data[data.length - 1][0],  // Get year of last data point
          this.days = 24 * 36e5; // Milliseconds in a day
          this.addFlag()

          // http://jsfiddle.net/wkBwW/16/
          this.$refs.flagChart.chart.xAxis[0].setExtremes(this.lastDate - 100 * this.days,this.lastDate)
        })
    },
    methods: {
      addFlag(){
        let upperflagData = {
            type: 'flags',
            name: 'Flags in pane',
            data: [{
                x: this.lastDate - 40 * this.days,
                title: 'In pane'
            }, {
                x: this.lastDate - 15 * this.days,
                title: 'In pane'
            }],
            yAxis: 1,
            shape: 'squarepin'
        }

        let middleflagData = {
            type: 'flags',
            name: 'Flags on series',
            data: [{
                x: this.lastDate - 40 * this.days,
                title: 'On series'
            }, {
                x: this.lastDate - 15 * this.days,
                title: 'On series'
            }],
            onSeries: 'dataseries',
            shape: 'squarepin'
        }

        let underflagData = {
            type: 'flags',
            name: 'Flags on axis',
            data: [{
                x: this.lastDate - 40 * this.days,
                title: 'On axis'
            }, {
                x: this.lastDate - 15 * this.days,
                title: 'On axis'
            }],
            shape: 'squarepin'
        }
        this.chartOptions.series.push(upperflagData)
        this.chartOptions.series.push(middleflagData)
        this.chartOptions.series.push(underflagData)
      }
    },
  }
</script>
