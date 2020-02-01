import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allProducts: [],
    cart: []
  },
  getters: {
    getAllProducts: state => {
      return state.allProducts;
    },
    getCart: state => state.cart
  },
  mutations: {
    allProductItem: (state, payload) => {
      state.allProducts = payload;
    },
    // add to cart
    cartItem: (state, payload) => state.cart.push(payload),

    // removeItem
    removeCartItem: (state, payload) => state.cart.splice(payload, 1),
    // searchItem
    searchItem: (state, payload) => (state.allProducts = payload)
  },
  actions: {
    // fetch All items
    async fetchAllProducts({ commit }) {
      let response = await axios.get("http://localhost:3000/items");
      commit("allProductItem", response.data);
    },
    // add To cart
    addToCart({ commit }, item) {
      commit("cartItem", item);
    },

    // Remove Cart Item
    removeCart({ commit }, item) {
      commit("removeCartItem", item);
    },

    // search
    search({ commit }, keyword) {
      axios.get("http://localhost:3000/search/" + keyword).then(res => {
        commit("searchItem", res.data);
      });
    }
  },
  modules: {}
});
