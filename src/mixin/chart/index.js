const chartConfig = {
  data() {
    return {
      chartOptions: {
        chart: {
          backgroundColor: "#ffffff",
          width: 800,
          height: 560,
          marginTop: 60,
          marginLeft: 100,
          marginRight: 50,
          borderRadius: 4,
          shadow: {
            color: "rgba(0, 0, 0, 0.4)",
            offsetX: 1.5,
            offsetY: 1.5,
            opacity: 0.1,
            width: 4
          }
        },
        colors: [
          "#5fe1c2",
          "#48b9a8",
          "#eec824",
          "#6a961f",
          "#a0dfdf", // 애매
          "#fa3c5a",
          "#f4908a",
          "#f2dc99",
          "#1d7d9e",
          "#92b473"
        ],
        credits: {
          enabled: true,
          position: {
            x: -10,
            y: -12
          }
        },
        exporting: {
          enabled: true
        },
        legend: {
          enabled: true,
          itemStyle: {
            color: "#000000",
            fontWeight: "bold"
          }
        },
        title: {
          text: ""
        },
        tooltip: {
          shared: true,
          useHTML: true,
          valueDecimals: 0,
          style: {
            fontSize: "14px",
            fontWeight: 800
          }
        },
        xAxis: {
          labels: {
            style: {
              color: "#666666"
            }
          },
        },
        yAxis: {
          labels: {
            format: "{value}",
            style: {
              color: "#666666"
            }
          },
          gridLineWidth: 0,
          title: {
            text: ""
          }
        }
      },
      isDark: false
    };
  }
};

export default chartConfig;
