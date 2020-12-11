import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orders: [],
    deleteId: null,
    copyOrderInProgress: false,
    copyOrderErrors: [],
    deleteOrderInProgress: false,
    deleteOrderErrors: [],
    ordersView: []
  },
  mutations: {
    copyOrderInProgress(state){
        state.copyOrderInProgress = true;
    },
    addOrder(state, order){
        state.orders = order;
        state.copyOrderInProgress = false;
    },
    copyOrderError(state, errorMessage){
      state.copyOrderErrors.push(errorMessage);
      state.copyOrderInProgress = false;
    },
    deleteOrderInProgress(state){
      state.deleteOrderInProgress = true;
    },
    deleteOrder(state, order){
        state.orders = order;
        state.deleteOrderInProgress = false;
    },
    deleteOrderError(state, errorMessage){
      state.deleteOrderErrors.push(errorMessage);
      state.deleteOrderInProgress = false;
    },
    setOrders(state, orders){
      state.orders = orders;
      state.copyOrderInProgress = false;
    },
    setDeleteId(state, id) {
      state.deleteId = id;
    },
    setView(state, orders) {
      state.orders = orders;
    },
    setOrdersView(state, ordersView) {
      state.ordersView = ordersView;
    }
  },
  actions: {
    copyOrder({commit}, order){
      commit('copyOrderInProgress');

      axios({
          method: 'post',
          url: '/api/duplicateOrder',
          data: {
              order
          }
      }).then(function (req) {
          commit("addOrder", req);
      }).catch(function (e) {
          commit('copyOrderError', e)
      });
    },
    deleteOrder({commit}, id){
      console.log(id);
      commit('deleteOrderInProgress');
      commit('setDeleteId', id);
      axios({
          method: 'post',
          url: '/api/cancelOrder',
          data: {
              id
          }
      }).then(function (req) {
          commit("addOrder", req);
      }).catch(function (e) {
          commit('deleteOrderError', e)
      });
    },
    loadOrders({commit}){
      commit('copyOrderInProgress');

      axios({
          method: 'get',
          url: '/api/getOrders'
      }).then(function (res) {
          commit("setOrders", res.data);
      }).catch(function (e) {
          commit('copyOrderError', e)
      });
    },
    setView({commit}, orders) {
      let day = new Date().getDate(),
          month = new Date().getMonth(),
          year = new Date().getFullYear(),
          ordersView = [];
      
      for(let i = 0; i < orders.length; i++) {
        ordersView[i] = [];
        for(let j = 0; j < orders[i].deliveries.length; j++) {
          let order = orders[i].deliveries[j].date.split('-');
          if(
            order[0] < year ||
            order[1] < month ||
            order[2] < day
          ) {
            orders[i].deliveries[j].view = false;
            ordersView[i].push(false);

            commit('setView', orders);
            commit('setOrdersView', ordersView);
          }
          else {
            orders[i].deliveries[j].view = true;

            commit('setView', orders);

          }
        }
      }
    }
  },
  modules: {
  }
})
