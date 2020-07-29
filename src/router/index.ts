import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Event from "../views/Event.vue";
import Juhee100 from "../views/Juhee100.vue";
import SliderScatter from "../views/SliderScatter.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/event",
    name: "Event",
    component: Event
  },
  {
    path: "/100",
    name: "Juhee100",
    component: Juhee100
  },
  {
    path: "/slider",
    name: "SliderScatter",
    component: SliderScatter
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
