import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import pageNotFoundView from "../views/pageNotFoundView.vue";
import CookieView from "../views/CookieView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/project/",
      redirect: "/",
    },
    {
      path: "/project/:slug",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/cookie",
      name: "cookie",
      component: CookieView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "pageNotFound",
      component: pageNotFoundView,
    },
  ],
});

export default router;
