import { createRouter, createWebHistory } from 'vue-router'

import main from '../layouts/main.vue';
import blank from '../layouts/blank.vue';
import center from '../layouts/center.vue';

/* import { projectAuth } from "../firebase/config";
// route guard

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Login" });
  } else {
    next();
  }
}; */

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: blank
    }
    // beforeEnter: requireAuth,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      layout: center
    }
  },
  {
    path: '/numbers',
    name: 'numbers',
    component: () => import('../views/Numbers.vue'),
    meta: {
      layout: blank
    }
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue'),
    meta: {
      layout: blank
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import('../views/404.vue'),
    meta: {
      layout: blank
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
