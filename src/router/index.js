import Vue from "vue";
import VueRouter from "vue-router";
import Gmap from "../views/Gmap.vue";
import FullInfo from "@/components/FullInfo.vue";
import Countries from "@/components/Countries.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Gmap",
    component: Gmap,
    beforeEnter: (to, from, next) => {
      next({ name: "FullInfo" });
    }
  },
  {
    path: "/Full-info",
    name: "FullInfo",
    component: FullInfo
  },
  {
    path: "/Countries",
    name: "Countries",
    component: Countries
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
