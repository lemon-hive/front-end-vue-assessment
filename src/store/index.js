import Vue from 'vue';
import Vuex from 'vuex';
import configData from '../../configs/config.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    configData
  },
  getters: {
    getConfig(state) {
      return state.configData;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
