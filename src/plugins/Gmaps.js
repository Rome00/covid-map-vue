import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC8xxNqIp4xdmB7m-t6HNrLaX3Id486dwc",
    libraries: "places"
  }
});

export default VueGoogleMaps;
