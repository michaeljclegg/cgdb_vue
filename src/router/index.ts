import { createRouter, createWebHistory } from 'vue-router'

import ViewAuth from "../views/auth/ViewAuth.vue";
import inputForm from "../views/inputForm.vue";
import displayForm from "../views/displayForm.vue";
import list from "../views/list.vue";


// import { auth } from "../firebase/index.js";

// route guard

/*
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
  },
  {
    path: "/auth",
    name: "auth",
    component: ViewAuth,
  },
  {
    path: "/input",
    name: "input",
    component: inputForm,
  },
  {
    path: "/display",
    name: "display",
    component: displayForm
  },
  {
    path: '/list',
    name: 'list',
    component: list,
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import('../views/404.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "text-green-900",
  linkExactActiveClass: 'text-red-500',
})

export default router

// option to apply classes (see App.vue)
// linkActiveClass: 'active-link',
// linkExactActiveClass: 'exact-active-link',
