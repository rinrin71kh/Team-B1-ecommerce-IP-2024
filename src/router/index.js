import { createRouter, createWebHistory } from 'vue-router';
import login from '@/components/auth/login/login.vue';
import register from '@/components/auth/register/register.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: login,
  },
  {
    path: '/register',
    name: 'Register',
    component: register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
