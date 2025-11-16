import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CartView from '../views/CartView.vue'
import ShoppingView from '@/views/ShoppingView.vue'
import SigninView from '@/views/SigninView.vue'
import SignupView from '@/views/SignupView.vue'
import DeliveryView from '@/views/DeliveryView.vue'
import ProductView from '@/views/ProductView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path : '/Shopping', component : ShoppingView},
  { path : '/CartView', component : CartView},
  { path : '/Signin', component : SigninView},
  { path : '/Signup', component : SignupView},
  { path : '/Delivery', component : DeliveryView},
  { path: '/ProductView' ,component: ProductView,},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router