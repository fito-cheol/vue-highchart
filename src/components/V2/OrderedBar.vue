<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/pareto
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          renderTo: "container",
          type: "column"
        },
        title: {
          text: "Restaurants Complaints"
        },
        tooltip: {
          shared: true
        },
        xAxis: {
          categories: [
            "Overpriced",
            "Small portions",
            "Wait time",
            "Food is tasteless",
            "No atmosphere",
            "Not clean",
            "Too noisy",
            "Unfriendly staff"
          ],
          crosshair: true
        },
        yAxis: [
          {
            title: {
              text: ""
            },
            plotLines: [{
              value: 200,
              color: 'red',
              width: 1,
              label: {
                  text: 'Theoretical mean: 200',
                  align: 'center',
                  style: {
                      color: 'red'
                  }
              }
            }]
          },
          // {
          //   title: {
          //     text: ""
          //   },
          //   minPadding: 0,
          //   maxPadding: 0,
          //   max: 100,
          //   min: 0,
          //   opposite: true,
          //   labels: {
          //     format: "{value}%"
          //   }
          // }
        ],
        series: [
          // {
          //   type: "pareto",
          //   name: "Pareto",
          //   yAxis: 1,
          //   zIndex: 10,
          //   baseSeries: 1,
          //   tooltip: {
          //     valueDecimals: 2,
          //     valueSuffix: "%"
          //   }
          // },
          {
            name: "Complaints",
            type: "column",
            zIndex: 2,
            data: [755, 222, 151, 86, 72, 51, 36, 10]
          }
        ]
      }
    };
  }
};
</script>
