<template>
  <table id="table-sparkline">
    <thead>
        <tr>
            <th>State</th>
            <th>Income</th>
            <th>Income per quarter</th>
            <th>Costs</th>
            <th>Costs per quarter</th>
            <th>Result</th>
            <th>Result per quarter</th>
        </tr>
    </thead>
    <tbody id="tbody-sparkline">
        <tr>
            <th>Alabama</th>
            <td>254</td>
            <td>
              <chart-sparkline data-sparkline="71, 78, 39, 66 " />
            </td>
            <td>296</td>
            <td>
              <chart-sparkline data-sparkline="68, 52, 80, 96 " />
            </td>
            <td>-42</td>
            <td>
              <chart-sparkline data-sparkline="68, 52, 80, 96 " chart-type="column" />
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/sparkline
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
