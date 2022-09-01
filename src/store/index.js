import Vue from 'vue';
import Vuex from 'vuex';
import configData from '../../configs/config.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    configData,
    pgOneCardItems: [],
    pgTwoCardItems: []
  },
  getters: {
    getConfig(state) {
      return state.configData;
    },

    getPgOneItems(state) {
      return state?.configData?.flow?.pages[0].cards.map((item, i) => ({ ...item, id: i }));
    },

    getPgTwoItems(state) {
      return state?.configData?.flow?.pages[1].cards.map((item, i) => ({ ...item, id: i }));
    },

    getPgOneCardItems(state) {
      return state.pgOneCardItems;
    },

    getPgTwoCardItems(state) {
      return state.pgTwoCardItems;
    }
  },
  mutations: {
    toggleCartPgOne(state, payload) {
      const product = payload;
      const index = state.pgOneCardItems.findIndex((object) => object.id === product.id);

      if (index > -1) {
        state.pgOneCardItems.splice(index, 1);
      } else {
        state.pgOneCardItems.push(product);
      }
    },

    toggleCartPgTwo(state, payload) {
      const product = payload;
      const index = state.pgTwoCardItems.findIndex((object) => object.id === product.id);

      if (index > -1) {
        state.pgTwoCardItems.splice(index, 1);
      } else {
        state.pgTwoCardItems.push(product);
      }
    }
  },
  actions: {
  },
  modules: {
  },
});
