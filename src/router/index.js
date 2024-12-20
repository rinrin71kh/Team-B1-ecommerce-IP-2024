import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/components/BuyingProcess/CartView.vue';
import Login from '@/components/auth/login/login.vue';
import Register from '@/components/auth/register/register.vue';
import { AuthService } from '@/auth';
import AboutView from '../views/AboutView.vue';
import Landing from '@/components/resource/landing.vue';
import Checkout from '@/components/BuyingProcess/Checkout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
    },
    {
      path: '/checkout',
      name: 'cart',
      component: CartView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/test',
      name: 't',
      component: AboutView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !AuthService.isLoggedIn()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
