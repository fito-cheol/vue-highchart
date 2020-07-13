<template>
  <div v-on:mousemove="handleMouseEvent">
    <h1>Mouse Event</h1>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/synchronized-charts
// http://jsfiddle.net/sivaecekrr/qpg7a9en/

export default {
  data() {
    return {};
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          zoomType: "x",
          events: {
            load: function() {
              console.log("load");
            },
            click: this.logger,
            selection: function() {
              return false;
            }
          }
        },

        series: [
          {
            data: [
              29,
              71,
              106,
              129,
              144,
              176,
              135,
              148,
              216,
              194,
              95,
              54,
              42,
              66,
              32,
              132,
              54,
              233,
              42,
              99,
              34,
              23,
              29,
              71,
              106,
              129,
              144,
              176,
              135,
              148,
              216,
              194,
              95,
              54,
              42,
              66,
              32,
              132,
              54,
              233,
              42,
              99,
              34,
              23
            ],
            events: {
              click: this.logger
            }
          }
        ],
      };
    }
  },
  methods: {
    logger(e) {
      console.log("logger", e);
    },
    handleMouseEvent(e) {
      console.log("MouseEvent", e, e.x, e.y);
      const chart = this.$refs.chart.chart
      const event = chart.pointer.normalize(e);
      const point = chart.series[0].searchPoint(event, true);
      if (point){
        console.log(point.x, point.y)
      }
    }
  }
};
</script>
