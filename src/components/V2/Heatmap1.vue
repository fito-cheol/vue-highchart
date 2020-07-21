<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
// https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/demo/heatmap
// 배경으로 축구장이 들어가는 18Zone을 구현할 것 
// 투명도 -> https://stackoverflow.com/questions/43462250/highcharts-heatmap-points-with-transparency-depending-on-value
// 사이즈 이해 -> https://www.highcharts.com/docs/chart-design-and-style/design-and-style
import Highcharts from 'highcharts';
export default {
  data() {
    return {
      chartOptions: {

            chart: {
                type: 'heatmap',
                marginTop: 40,
                marginBottom: 80,
                plotBorderWidth: 1,
                plotBackgroundImage: "https://juhee100bucket.s3.ap-northeast-2.amazonaws.com/court_background_black.png",
                height: 600
            },

            title: {
                text: '18 Zone'
            },

            xAxis: {
                categories: ['디펜딩 서드', '', '미들서드', '', '파이널 서드', ''],


            },

            yAxis: {
                categories: ['좌측 통로', '중앙 통로', '우측 통로'],
                title: null,
                reversed: true
                
            },

            accessibility: {
                point: {
                    descriptionFormatter: function (point) {
                        var ix = point.index + 1,
                            xName = getPointCategoryName(point, 'x'),
                            yName = getPointCategoryName(point, 'y'),
                            val = point.value;
                        return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                    }
                }
            },

            colorAxis: {
                min: 0,
                minColor: 'rgba(255,255,255,0)',
                maxColor: 'rgba(255,0,0,0.8)'
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'top',
                y: 25,
                symbolHeight: 280
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                        this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
                }
            },

            series: [{
                name: 'Sales per employee',
                borderWidth: 1,
                data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [1, 0, 92], [1, 1, 58], [1, 2, 78], [2, 0, 35], [2, 1, 15], [2, 2, 123], [3, 0, 72], [3, 1, 132], [3, 2, 114], [4, 0, 38], [4, 1, 5], [4, 2, 8], [5, 0, 88], [5, 1, 32], [5, 2, 12]],
                dataLabels: {
                    enabled: true,
                    color: '#ffffff',
                    formatter: function () {
                        // https://stackoverflow.com/questions/24708198/how-to-format-highcharts-datalabels-decimal-points
                        // https://www.highcharts.com/docs/chart-concepts/labels-and-string-formatting
                        console.log(this)
                        return parseFloat(this.point.value).toLocaleString()+"%";
                    }
                }
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        yAxis: {
                            labels: {
                                formatter: function () {
                                    return this.value.charAt(0);
                                }
                            }
                        }
                    }
                }]
            }

        }
    };
  }
};
// rgba(255,255,255,0)
</script>

<style>
rect.highcharts-background{
    fill: #000;
}

</style>

