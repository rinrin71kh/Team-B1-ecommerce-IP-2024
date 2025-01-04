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
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/checkout',
      name: 'cart',
      component: CartView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/test',
      name: 't',
      component: AboutView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = AuthService.isLoggedIn();
  if (to.meta.requiresGuest && isLoggedIn) {
    next({ name: 'home' });
  } else if (to.meta.requiresAuth && !isLoggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
});



export default router;
