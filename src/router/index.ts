import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Skills from '../views/Skills.vue';
import Works from '../views/Works.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/works',
      name: 'Works',
      component: Works,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
});

export default router;
