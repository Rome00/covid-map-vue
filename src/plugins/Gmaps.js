import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    // your key here
    key: "xxxxxxx",
    libraries: "places"
  }
});

export default VueGoogleMaps;
