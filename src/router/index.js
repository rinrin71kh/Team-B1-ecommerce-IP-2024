import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/components/ORNG/CartView.vue'
import Checkout from '@/components/ORNG/Checkout.vue'
import ProductList from '@/components/ORNG/ProductList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    //ORNG: Buying features
    { path: '/products', component: ProductList },
    { path: '/cart', component: CartView },
    { path: '/checkout', component: Checkout },
    // { path: '/order-confirmation', component: OrderConfirmation },
    // { path: '/order-tracking', component: OrderTracking },
  ],
})

export default router
