import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import What from '../views/What.vue';
import Who from '../views/Who.vue';
import Where from '../views/Where.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/where',
      name: 'where',
      component: Where,
    },
    {
      path: '/what',
      name: 'what',
      component: What,
    },
    {
      path: '/who',
      name: 'who',
      component: Who,
    },
  ],
});

export default router;
