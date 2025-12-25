import type { RouteRecordRaw } from "vue-router";
import { RouteName } from "./route-name";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/app",
    component: () => import("@/layouts/RibbonLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/auth/Login.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: RouteName.NOT_FOUND,
    component: () => import("@/views/NotFound.vue"),
  },
];
