import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components";
import vueGoogleMapWrapper from "./plugins";

import HighchartsVue from "highcharts-vue";
import Highcharts from "highcharts";
import Stock from "highcharts/modules/stock";
import Pareto from "highcharts/modules/pareto";
import variablepie from "highcharts/modules/variable-pie";
import Maps from "highcharts/modules/map";
import Treemap from "highcharts/modules/treemap";
import highchartsMore from "highcharts/highcharts-more";

Stock(Highcharts);
Pareto(Highcharts);
variablepie(Highcharts);
Maps(Highcharts);
Treemap(Highcharts);
highchartsMore(Highcharts);

Vue.use(HighchartsVue);

Vue.use(vueGoogleMapWrapper, {
  apiKey: "Your Key"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
