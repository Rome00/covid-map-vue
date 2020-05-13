<template>
  <v-row align="center" justify="center" class="g-map" no-gutters>
    <v-col cols="12" class="g-map">
      <gmap-map
        :center="center"
        :zoom="2"
        map-type-id="terrain"
        :options="{
          styles: mapStyle,
          minZoom: 3,
          maxZoom: 6,
          mapTypeControl: false,
          streetViewControl: false
        }"
        style="height: 100%; width: 100%"
      >
        <gmap-marker
          v-for="(place, index) in covInfo"
          :key="index"
          :position="place.location"
          :clickable="true"
          @click="toggleInfo(place)"
          @blur="closeInfo"
          :icon="iconData"
        >
          <transition
            @beforeEnter="beforeEnter"
            @enter="enter"
            appear
            :css="false"
          >
            <gmap-info-window
              v-if="place.infoOpened"
              :opened="place.infoOpened"
              @closeclick="closeInfo"
            >
              <Info :data="place" />
            </gmap-info-window>
          </transition>
        </gmap-marker>
      </gmap-map>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import { gsap } from "gsap";
import Info from "@/components/info";
import customStyles from "@/plugins/style.js";

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 26, lng: 30 },
      mapStyle: customStyles,
      iconData: {
        url: require("@/assets/virus.png")
      }
    };
  },
  computed: {
    ...mapGetters(["covInfo"])
  },
  methods: {
    toggleInfo(data) {
      this.covInfo.forEach(elm => {
        elm.infoOpened = false;
      });
      data.infoOpened = !data.infoOpened;
    },
    closeInfo() {
      this.covInfo.forEach(elm => {
        elm.infoOpened = false;
      });
    },
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        onComplete: done
      });
    }
  },
  components: {
    Info
  },
  created() {
    this.$store.dispatch("getCovData");
  }
};
</script>

<style lang="scss" scoped>
.g-map {
  height: 100%;
  position: relative;
  z-index: 5;
  background: transparent;
}
</style>
