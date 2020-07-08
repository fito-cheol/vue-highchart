<template>
  <div class="home">
    <line-chart />
    <chart-chart/>
    <chart-chart2/>
  </div>
</template>

<script>
// @ is an alias to /src
import LineChart from "@/components/LineChart.vue";

export default {
  name: "Home",
  components: {
    LineChart
  }
};
</script>
