<template>
  <v-container>
    <v-row dense v-if="fullInfo">
      <v-col cols="12">
        <v-card color="blue-grey">
          <v-card-title class="head"> Total Confirmed </v-card-title>
          <v-card-subtitle class="cases pt-2">{{
            fullInfo.confirmed | numeralFormat
          }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="blue-grey">
          <v-card-title class="head"> Global Deaths </v-card-title>
          <v-card-subtitle class="red--text text--darken-4 cases pt-2">{{
            fullInfo.deaths | numeralFormat
          }}</v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card color="blue-grey">
          <v-card-title class="head"> Global Recovered </v-card-title>
          <v-card-subtitle class="green--text text--darken-1 cases pt-2">{{
            fullInfo.recovered | numeralFormat
          }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      fullInfo: null
    };
  },
  created() {
    axios
      .get(
        "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief"
      )
      .then(Response => {
        this.fullInfo = Response.data;
      });
  }
};
</script>

<style lang="scss" scoped>
.head {
  font-size: 1.25rem !important;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: normal !important;
  font-family: "Roboto", sans-serif !important;
}
.cases {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
