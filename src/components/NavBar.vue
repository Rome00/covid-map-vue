<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense :class="{ 'list-elevation': isTrue }">
        <v-list-item class="pa-0" :class="{ 'list-elevation-item': isTrue }">
          <v-card flat :class="{ 'list-elevation': isTrue }">
            <v-tabs fixed-tabs dark>
              <v-tab :to="{ name: 'FullInfo' }" @click="isTrue = true">
                Global
              </v-tab>
              <v-tab :to="{ name: 'Countries' }" @click="isTrue = false">
                Countries
              </v-tab>
            </v-tabs>
            <v-container>
              <router-view />
            </v-container>
          </v-card>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title :to="{ name: 'Gmap' }">Covid-19 Map</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    source: String
  },
  computed: {
    ...mapGetters(["covInfo"])
  },
  data: () => ({
    drawer: false,
    covFull: null,
    tab: null,
    isTrue: true
  })
};
</script>

<style lang="scss" scoped>
.list-elevation {
  height: 100%;
  width: 100%;
  &-item {
    width: inherit;
    height: inherit;
    overflow: auto;
  }
}
</style>
