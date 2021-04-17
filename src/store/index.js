import { createStore } from "vuex";

export default createStore({
  state: {
    data: {
      latlng: null,
      capital: null,
    },
  },
  mutations: {
    setCountryData(state, data) {

    }
  },
  actions: {
    // setCountryData({commit}, )
  },
  modules: {},
});
