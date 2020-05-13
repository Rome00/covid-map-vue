<template>
  <v-app id="app">
    <NavBar />

    <v-content>
      <v-container class="fill-height" fluid>
        <Gmap />
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import Gmap from "@/views/Gmap.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    Gmap,
    NavBar
  },
  data: () => ({
    drawer: null,
    covFull: null
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped></style>
