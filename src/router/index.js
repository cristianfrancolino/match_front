import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAccountStore } from '../stores/account';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        hideNavbar: true,
      },
    },
    {
      path: '/recover_password',
      name: 'recover',
      component: () => import('../views/RecoverPasswordView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        hideNavbar: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const accountStore = useAccountStore();
  if (to.matched.some((record) => record.meta.requiresAuth) && !accountStore.isAuthenticated) {
    next({ name: 'login' });
  } else if (to.name === 'login' && accountStore.isAuthenticated) {
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
