<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
    <highcharts :options="chartOptions2"></highcharts>
  </div>
</template>

<script>
import Highcharts from 'highcharts';
import sprint from "../../mixin/chart/sprint";
import basicChart from "../../mixin/chart/index";
import importChart from "../../mixin/chart/import";
export default {
  mixins: [basicChart, sprint, importChart],
  async created() {
    await this.setCsvFile(this.ohCoachHeatmapCsvUrl);
    await this.setCsvFile2(this.ohCoachHeatmapCsvUrl2);
    this.setCsvData(this.csvData);
    this.setCsvData2(this.csvData2);
  },
  computed: {},
  data() {
    return {
      ohCoachHeatmapCsvUrl: "https://juhee100bucket.s3.ap-northeast-2.amazonaws.com/csv-file/heatmap.csv",
      ohCoachHeatmapCsvUrl2: "https://juhee100bucket.s3.ap-northeast-2.amazonaws.com/csv-file/hitmap2.csv",
      chartSeries: [],
      chartSeriesCount: 0,
      chartOptions: {
        chart: {
          type: "heatmap",
          plotBackgroundImage: "https://juhee100bucket.s3.ap-northeast-2.amazonaws.com/court_background_black.png",
          marginBottom: 50,
        },
        boost: {
            useGPUTranslations: true
        },
        xAxis: {
          showLastLabel: false,
          labels: {
             enabled: false
          },  
          lineWidth: 0,
          tickLength: 0
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
             enabled: false
          },
        },
        colorAxis: {
          stops: [
            [0, "#b3cde0"],
            [0.2, "#6497b1"],
            [0.4, "#005b96"],
            [0.7, "#03396c"],
            [1, "#03396c"]
          ],
          min: 0,
          max: 50,
          startOnTick: false,
          endOnTick: false,
          labels: {
            format: '{value}'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        series: [{
          data: [],
          boostThreshold: 40,
          borderWidth: 0,
          borderColor: {
            stops: [
              [0, "#b3cde0"],
              [0.2, "#6497b1"],
              [0.4, "#005b96"],
              [0.7, "#03396c"],
              [1, "#03396c"]
            ],
          },
          nullColor: null,
          colsize: 1, // one day
          turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
        }]
      },
      chartOptions2: {
        chart: {
          backgroundColor: "#000",
          width: 800,
          height: 560,
          type: "heatmap",
          plotBackgroundImage: "https://juhee100bucket.s3.ap-northeast-2.amazonaws.com/court_background_black.png"
        },
        boost: {
            useGPUTranslations: true
        },
        title: {
            text: 'Highcharts heat map',
            align: 'left',
            x: 40
        },
        xAxis: {
          labels: {
            enabled: false,
            align: 'left',
            x: 5,
            y: 14,
          },
          showLastLabel: false,
          lineWidth: 0,
          tickLength: 0
        },
        yAxis: {
          labels: {
             enabled: false
          },
          title: {
            text: null
          },
          gridLineWidth: 0,
        },
        colorAxis: {
          stops: [
            [0, "#b3cde0"],
            [0.2, "#6497b1"],
            [0.4, "#005b96"],
            [0.7, "#03396c"],
            [1, "#03396c"]
          ],
          min: 0,
          max: 120,
          startOnTick: false,
          endOnTick: false,
          labels: {
            format: '{value}'
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          enabled: false
        },
        series: [{
          data: [],
          boostThreshold: 40,
          borderWidth: 1,
          borderColor: {
            stops: [
              [0, "#b3cde0"],
              [0.2, "#6497b1"],
              [0.4, "#005b96"],
              [0.7, "#03396c"],
              [1, "#03396c"]
            ],
          },
          nullColor: null,
          colsize: 1, // one day
          turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
        }]
      }
    };
  },
  methods: {
    setCsvData: function(csvData) {
      csvData.forEach(element => {
        let arr = [];
        arr.push(Number(element.x)*1.2);
        arr.push(Number(element.y)*1.2);
        arr.push(Number(element.recode_level_total));
        this.setData.push(arr);
      });
      this.chartOptions.series[0].data = this.setData;
    },
    setCsvData2: function(csvData) {
      csvData.forEach(element => {
        let arr = [];
        arr.push(Number(element.x));
        arr.push(Number(element.y));
        arr.push(Number(element.recode_level_total));
        this.setData2.push(arr);
      });
      this.chartOptions2.series[0].data = this.setData2;
    }
  }
};
</script>

<style></style>