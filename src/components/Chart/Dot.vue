<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          backgroundColor: "#000",
          type: "scatter",
          width: 600,
          height: 400,
          plotBackgroundImage: "https://ohcoach.com/common/images/court.png"
        },
        title: {
          text: "Sprint Chart"
        },
        xAxis: {
          title: {
            enabled: false
          },
          gridLineWidth: 0,
          gridLineColor: "none"
        },
        yAxis: {
          title: {
            enabled: false
          }
        },
        series: [
          {
            data: [
              [0, 0],
              [6627, 2503],
              [6675, 2500],
              [6726, 2493],
              [6778, 2489],
              [6827, 2471],
              [6873, 2461],
              [6935, 2454],
              [6995, 2441],
              [7060, 2442],
              [7118, 2431],
              [7180, 2420],
              [7249, 2418],
              [7321, 2421],
              [7390, 2422],
              [7457, 2420],
              [7531, 2415],
              [7609, 2422],
              [7684, 2437],
              [7754, 2436],
              [7830, 2440],
              [7907, 2441],
              [7988, 2446],
              [8064, 2457],
              [8142, 2456],
              [8222, 2454],
              [8299, 2464],
              [8376, 2472],
              [8452, 2487],
              [8537, 2482],
              [8616, 2500],
              [8690, 2519],
              [8758, 2538],
              [8821, 2567],
              [8893, 2587],
              [8954, 2610],
              [9009, 2640],
              [9065, 2674],
              [9116, 2691],
              [9169, 2709],
              [9219, 2722],
              [10000, 10000]
            ]
          }
        ],
        plotOptions: {
          scatter: {
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
          }
        }
      },
      title: ""
    };
  }
};
</script>
<style></style>
