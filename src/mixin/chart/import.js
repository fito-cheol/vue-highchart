import * as d3 from "d3";

const importChart = {
  data: () => ({
    csvData: [],
    csvData2: [],
    setData: [],
    setData2: [],
  }),
  computed: {},
  methods: {
    setCsvFile: async function(url) {
      // csv파일 불러오기 위한 함수.
      let getCsvFile = function(filePath) {
        return d3.csv(filePath);
      };
      this.csvData = await getCsvFile(url);
    },
    setCsvFile2: async function(url) {
      // csv파일 불러오기 위한 함수.
      let getCsvFile = function(filePath) {
        return d3.csv(filePath);
      };
      this.csvData2 = await getCsvFile(url);
    }
  }
};

export default importChart;
