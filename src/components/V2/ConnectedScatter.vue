<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
    
  </div>
</template>

<script>
// https://www.highcharts.com/demo/combo
// spline과 scatter를 동시에 섞자
import sprintData from "@/assets/mocks/components/charts/sprintData.json";
import sprint from "@/mixin/chart/sprint";
import basicChart from "@/mixin/chart/index";
export default {
  mixins: [basicChart, sprint],
  created() {
    this.setChartData();
    // this.drawArrow();
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
        series: [{
          type: "spline",
          data:[
            [0,0],
            [6627, 2503],
          ],
          dataLabels: { // 참고 http://jsfiddle.net/ys73khx8/
            enabled: true,
            formatter: function(){
              return 'tmp '+ this.x + ", "+ this.y
            }
          }
        },
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
        // tooltip: {
        //   crosshairs: true,
        //   shared: true
        // },
        plotOptions: {
          scatter: {
            name:'Circle',
            marker: {
              
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: "rgb(100,100,100)"
                }
              }
            },
            states: {
              hover: {
                marker: {
                  enabled: false
                }
              }
            }
          },
          series: {
            marker: {
              name:'aaaaaaaaaaa',
              enabled: false,
            },
            states: {
              hover: {
                enabled: false
              },
              inactive: {
                // enabled: false
              }
            }
          }
        }
      }
    };
  },
  methods: {
    findSprintStartSpot: function() {
      return 7907;
    },
    splitDataIntoSeries: function() {
      let serverData = sprintData.data;
      serverData.forEach(element => {
        if (element[2] === "start") {
          let series = {
            name: `sprint${this.chartSeriesCount + 1}`,
            data: [],
            dashStyle: "dot",
            zoneAxis: "x",
            zones: [
              {
                value: 0
              },
              {
                dashStyle: "line"
              }
            ],
            color: "#6090ff"
          };
          this.chartSeries.push(series);
        } else if (element[2] === "sprint-start") {
          let seriesZone = this.chartSeries[this.chartSeriesCount]["zones"][0];
          seriesZone.value = element[0];
          return;
        }
        this.chartSeries[this.chartSeriesCount]["data"].push(element);
        if (element[2] === "end") {
          this.chartSeriesCount++;
        }
      });
    },
    setChartData: function() {
      // serverData 가져와서 series에 맞게 쪼개기
      this.splitDataIntoSeries();
      // chart 크기를 조정해 주는 기준 점 추가
      this.setStandSize();
      this.chartOptions.series = [].concat.apply(this.chartOptions.series, this.chartSeries);
    },
    setStandSize: function() {
      this.chartSeries.push({
        name: "feildsize",
        type: "scatter",
        data: [
          [0, 0],
          [10500, 7000]
        ]
      });
    }
  }
};
</script>

<style></style>