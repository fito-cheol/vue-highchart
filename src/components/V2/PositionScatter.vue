<template>
  <div>
    <highcharts ref="chart" :options="chartOptions"></highcharts>
    <button @click="newData"> 업데이트 </button>
  </div>
</template>

<script>
// https://www.highcharts.com/demo/combo
// spline과 scatter를 동시에 섞자
import sprint from "@/mixin/chart/sprint";
import basicChart from "@/mixin/chart/index";

export default {
  mixins: [basicChart, sprint],
  created() {
  },
  computed: {},
  data() {
    return {
      chartSeries: [],
      chartSeriesCount: 0,
      chartOptions: {
        chart: {
          type: "spline",
          plotBackgroundImage: "https://ohcoach.com/common/images/court.png"
        },
        legend: {
          enabled: false
        },
        series: [
        {
          type: "scatter",
          marker: {
              enabled: true,
              symbol: 'circle',
              radius: 10
          },
          labelText: "12",
          data:[{
            x:1000,
            y:1000,
            marker: {
              radius: 12
            },
            labelText: "12",
          },
          {
            x:5627,
            y:5503,
            marker: {
              radius: 10
            },
            labelText: "14",
          }
          ],
          dataLabels: { // 참고 https://jsfiddle.net/chrisvisokio/52zethbp/
            enabled: true,
            align: 'center',
            verticalAlign: 'middle',
            formatter: function(){
              return  this.point.labelText;
            },
            style:{
              fontSize: "11px",
              textOutline: "none",
            }
          }
        }],
        tooltip: {
          enabled: false
        },
        xAxis: {
          lineWidth: 0,
          labels: {
            enabled: false
          },
          tickLength: 0
        },
        yAxis: {
          labels: {
            enabled: false
          },
          gridLineWidth: 0
        },
        plotOptions: {
          series: {
            states: {
              hover: {
                enabled: false
              },
            }
          }
        }
      }
    };
  },
  methods: {
    newData(){
      let newPoint = [
        {
          x:1000,
          y:1500,
          labelText: "123"
        },
        {
          x:4627,
          y:2503,
          labelText: "987"
        }
      ]

      let newData = [
        {
          x:1000,
          y:1500,
          marker: {
            radius: 12
          },
          labelText: "123",
        },
        {
          x:4627,
          y:2503,
          marker: {
            radius: 10
          },
          labelText: "987",
        }
      ]

      let newSeries = {
          type: "scatter",
          marker: {
              enabled: true,
              symbol: 'circle',
              radius: 10
          },
          labelText: "12",
          data:newData,
          dataLabels: { 
            enabled: true,
            align: 'center',
            verticalAlign: 'middle',
            formatter: function(){
              return  this.point.labelText;
            },
            style:{
              fontSize: "11px",
              textOutline: "none",
            }
          }
        }
      let chart = this.$refs.chart.chart
      console.log(chart)
      chart.series[0].update(newSeries, true);
    }
  }
};
</script>

<style></style>