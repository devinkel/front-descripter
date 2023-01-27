import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue';
import Guard from '../services/middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      beforeEnter: Guard.redirectNotAuthAuthenticated,
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      beforeEnter: Guard.redirectAuthAuthenticated,
      name: "login",
      component: () => import('../views/Login.vue'),
    },
    {
      path: "/users/register",
      name: "register",
      component: () => import('../views/Register.vue'),
    },
  ],
});

export default router;
