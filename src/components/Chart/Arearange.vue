<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
// https://www.highcharts.com/demo/arearange-line
export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3]
          }
        ]
      }
    };
  }
};
</script>
