import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ordersArr: []
  },
  mutations: {
    getOrders(state, orders) {
      state.ordersArr = orders;
    },
    changeOrders(state, orders) {
      state.ordersArr = orders;
    },
    deleteOrders(state, orders) {
      state.ordersArr = orders;
    }
  },
  actions: {
  },
  modules: {
  }
})
