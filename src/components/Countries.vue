<template>
  <v-container>
    <v-row dense>
      <v-col cols="12" v-for="(item, index) in covInfo" :key="index">
        <v-card color="blue-grey" v-if="item.confirmed">
          <v-card-title class="head"> {{ item.countryregion }} </v-card-title>
          <v-card-subtitle class="cases pt-2">
            <div class="d-flex flex-column">
              <div class="confirm">
                Confirmed: <span>{{ item.confirmed | numeralFormat }}</span>
              </div>
              <div class="death">
                Deaths:
                <span class="red--text text--darken-4 cases">{{
                  item.deaths | numeralFormat
                }}</span>
              </div>
              <div class="recover">
                Recovered:
                <span class="green--text text--darken-1 cases pt-2">{{
                  item.recovered | numeralFormat
                }}</span>
              </div>
            </div>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["covInfo"])
  }
};
</script>

<style lang="scss" scoped></style>
