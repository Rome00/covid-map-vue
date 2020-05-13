import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    covData: []
  },
  mutations: {
    SET_COVDATA(state, countries) {
      countries.forEach(elm => {
        state.covData.push({
          ...elm,
          infoOpened: false
        });
      });
    }
  },
  getters: {
    covInfo(state) {
      return state.covData;
    }
  },
  actions: {
    getCovData({ commit }) {
      axios
        .get(
          "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso3"
        )
        .then(Response => {
          const sorted = Response.data.sort((a, b) => {
            return a.confirmed - b.confirmed;
          });
          commit("SET_COVDATA", sorted.reverse());
        });
    }
  }
});
