import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: []
  },
  getters: {
    getAllProducts: state => {
      return state.allProducts;
    }
  },
  mutations: {
    allProductItem: (state, payload) => {
      state.allProducts = payload;
    }
  },
  actions: {
    // fetch All items
    async fetchAllProducts({ commit }) {
      let response = await axios.get("http://localhost:3000/items");
      commit("allProductItem", response.data);
    }
  },
  modules: {}
});
