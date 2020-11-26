import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/headerLoggedIn',
    name: 'headerLoggedIn',
    component: HeaderLoggedIn
  },
  {
    path: '/orderForm',
    name: 'OrderForm',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderForm.vue')
  }
]

const router = new VueRouter({
  routes
})



export default router
