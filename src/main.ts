import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components";

import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import Pareto from "highcharts/modules/pareto";
import Maps from "highcharts/modules/map";
Pareto(Highcharts);
Maps(Highcharts);
Stock(Highcharts);
Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
