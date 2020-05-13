<template>
  <v-card class="mx-auto" max-width="360" min-width="250">
    <v-card-text>
      <div>Country</div>
      <p v-if="data.provincestate.length" class="display-1 text--primary">
        {{ data.provincestate }}
      </p>
      <p v-else class="display-1 text--primary">
        {{ data.countryregion }}
      </p>
      <div>statistic</div>
      <div class="d-flex flex-column">
        <div class="case-text blue-grey--text text--lighten-3">
          Confirmed:
          <span class="pl-2 grey--text case-text-items">{{
            data.confirmed
          }}</span>
        </div>
        <div class="case-text blue-grey--text text--lighten-3">
          Deaths:
          <span class="pl-2 red--text case-text-items">{{ data.deaths }}</span>
        </div>
        <div class="case-text blue-grey--text text--lighten-3">
          Recovered:
          <span class="pl-2 green--text case-text-items">{{
            data.recovered
          }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Info",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.case-text {
  font-weight: 500;
  &-items {
    font-weight: 500;
  }
}
</style>
