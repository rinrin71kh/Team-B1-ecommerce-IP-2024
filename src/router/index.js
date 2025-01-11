import { createRouter, createWebHistory } from 'vue-router'
import CartView from '@/views/CartView.vue';
import login from '@/views/auth/login/login.vue'; 
import register from '@/views/auth/register/register.vue';
import Logout from '@/views/Logout.vue';
import { AuthService } from '@/auth';
import AboutView from '../views/AboutView.vue';
import MainLayout from '@/components/MainLayout.vue';
import Content from '@/views/Content.vue';
import Product_detail from '@/views/Product_detail.vue';
import CategoryDetail from '@/views/CategoryDetail.vue';

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
        },
        {
          path: 'category/:id',
          name: 'categoryDetails',
          component: CategoryDetail,
        },
        
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/test',
      name: 'test',
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
