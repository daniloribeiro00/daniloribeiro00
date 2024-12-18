import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Skills from '../views/Skills.vue';
import Works from '../views/Works.vue';

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
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
