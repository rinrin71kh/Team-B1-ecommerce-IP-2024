import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/components/BuyingProcess/CartView.vue';
import Login from '@/components/auth/login/login.vue';
import Register from '@/components/auth/register/register.vue';
import { AuthService } from '@/auth';
import AboutView from '../views/AboutView.vue';
import Checkout from '@/components/BuyingProcess/Checkout.vue';
import MainLayout from '@/components/MainLayout.vue';
import Content from '@/components/resource/Content.vue';
import Product_detail from '@/components/resource/Product_detail.vue';
import SpecialOffer from '@/components/resource/SpecialOffer.vue';
import Product from '@/components/resource/Product.vue';
import Component from '@/components/resource/Component.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: '',
          name: 'home',
          component: Content,
        },
        {
          path: 'checkout',
          name: 'cart',
          component: CartView,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path: 'product/:id',
          name: 'productDetails',
          component: Product_detail,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      // meta: {
      //   requiresGuest: true,
      // }
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
      name: 'test',
      component: Product_detail,
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
