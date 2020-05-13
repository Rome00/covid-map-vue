import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import gmaps from "./plugins/Gmaps";
import numerals from "./plugins/numerals";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  gmaps,
  numerals,
  render: h => h(App)
}).$mount("#app");
