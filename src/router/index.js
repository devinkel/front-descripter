import { createRouter, createWebHistory } from "vue-router";
import DescripterView from '../views/Descripter.vue';
import Guard from '../services/middleware';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      beforeEnter: Guard.redirectAuthAuthenticated,
      name: "intro",
      component: () => import('../views/Intro.vue'),
    },
    {
      path: "/descripter",
      beforeEnter: Guard.redirectNotAuthAuthenticated,
      name: "descripter",
      component: DescripterView,
    },
  ],
});

export default router;
