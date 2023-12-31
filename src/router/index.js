// Composables
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/ausfahrten",
    name: "Ausfahrten",
    component: () => import("@/views/Ausfahrten.vue"),
  },
  {
    path: "/vorstandschaft",
    name: "Vorstandschaft",
    component: () => import("@/views/Vorstandschaft.vue"),
  },
  {
    path: "/mitglied-werden",
    name: "Mitglied werden",
    component: () => import("@/views/Mitglied.vue"),
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: () => import("@/views/Kontakt.vue"),
  },
  {
    path: "/impressum",
    name: "Impressum",
    component: () => import("@/views/Impressum.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
