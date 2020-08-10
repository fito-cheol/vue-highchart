<template>
  <div>
    <highcharts :constructorType="'stockChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          // width: '900',
          marginTop: 50,
          marginLeft: 80,
          marginRight: 50,
          marginBottom:100,
          backgroundColor: '#343939',
          animation: false,
          height: 700,
          style: {
              color: '#eee',
              fontFamily: "'Nanum Gothic', sans-serif",
              fontSize: '11px'
          },
        },

        series: [
          {
            color: '#f5ed54',
            data: [[1,1],[2,2],[3,3],[4,1],[5,2],[6,3],[7,1],[8,2],[9,3],[10,1],[11,2],[12,3]],
            name: "1번",
            lineWidth: 1.5,
            type: 'spline',
            yAxis: 0 //이걸로 yAxis랑 연동
          },
          {
            color: '#f5ed54',
            data: [[1,3],[2,2],[3,1],[4,3],[5,2],[6,1],[7,3],[8,2],[9,1],[10,3],[11,2],[12,1]],
            name: "2번",
            lineWidth: 1.5,
            type: 'spline',
            yAxis: 1
          }
        ],
        navigation: {
            buttonOptions: {
                theme: {
                    fill: '#343939',
                    states: {
                        hover: {
                            fill: '#343939'
                        },
                        select: {
                            fill: '#343939'
                        }
                    }
                }
            }
        },
        navigator: {
          top:45,
          baseSeries: 0,
          // baseSeries: (series[0].type === 'xrange') ? yAxis.length : yAxis.length-1
        },
        yAxis:[
          {
              height: 120 + 'px',
              labels: {
                  align: 'left',
                  x: -60,
                  y:0,
                  format: '{value} km/h',
              },
              showLastLabel: false,
              max: 35,
              min: 0,
              title: {
                  text: '1번 타이틀',
                  x: 50,
                  y: 15,
                  style: {
                      color: '#eee',
                  },
              },
              endOnTick: false,
              top: (150 * (1)) + 80 + 'px',
              offset: 0,
              textAlign: 'center',
              opposite: false,
          },
          {
              height: 120 + 'px',
              labels: {
                  align: 'left',
                  x: -60,
                  y:0,
                  format: '{value} km/h',
              },
              showLastLabel: false,
              max: 35,
              min: 0,
              title: {
                  text: '2번 타이틀',
                  x: 50,
                  y: 15,
                  style: {
                      color: '#eee',
                  },
              },
              endOnTick: false,
              top: (150 * (2)) + 80 + 'px',
              offset: 0,
              textAlign: 'center',
              opposite: false,
          },
        ],
        credits: { enabled: false },
        rangeSelector: { enabled : false },
      }
    };
  }
};
</script>
