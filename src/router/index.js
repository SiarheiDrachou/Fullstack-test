import Vue from 'vue'
import VueRouter from 'vue-router'
import Orders from '../views/Orders.vue'
import OrdersInfo from '../views/OrdersInfo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Orders',
    component: Orders,
  },
  {
    path: ':id',
    name: 'OrdersInfo',
    component: OrdersInfo,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
