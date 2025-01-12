import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/components/BuyingProcess/CartView.vue';
import Login from '@/components/auth/login/login.vue';
import Register from '@/components/auth/register/register.vue';
import { AuthService } from '@/auth';
import Admin from '@/components/Admin/admin.vue';
import Dashboard from '@/components/Admin/1.dashboard/dashboard.vue';
import User from '@/components/Admin/4.user/user.vue';
import Account from '@/components/Admin/5.account/account.vue';
import EditProfile from '@/components/Admin/5.account/editProfile.vue'; 
import Type from '@/components/Admin/3.product/2.type/type.vue';
import All from '@/components/Admin/3.product/1.all/all.vue';
import Sale from '@/components/Admin/2.sale/sale.vue';

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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cart',
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
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'sale',
          name: 'sale',
          component: Sale,
        },
        {
          path: 'product/all',
          name: 'all',
          component: All,
        },
        {
          path: 'product/type',
          name: 'type',
          component: Type,
        },
        {
          path: 'user',
          name: 'user',
          component: User,
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
        },
        {
          path: 'account/edit-profile', 
          name: 'edit-profile',
          component: EditProfile,
        },
      ],
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
