import type { RouteRecordRaw } from "vue-router";
import { ROUTE_NAME } from "./route-name";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/app",
    name: "app",
    component: () => import("@/layouts/RibbonLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/supplier",
        component: () => import("@/views/stock/Supplier.vue"),
        children: [
          {
            path: "/supplier",
            component: () => import("@/views/stock/Supplier.vue"),
            name: ROUTE_NAME.SUPPLIER,
          },
        ],
      },
      {
        path: "/room-management",
        // component: () => import("@/views/rooms/RoomManagementTab.vue"),
        name: "room-management",
        children: [
          {
            path: "/room",
            component: () => import("@/views/rooms/Room.vue"),
            name: ROUTE_NAME.ROOM,
          },
          {
            path: "/room-type",
            component: () => import("@/views/rooms/RoomType.vue"),
            name: ROUTE_NAME.ROOM_TYPE,
          },
        ],
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
    name: ROUTE_NAME.NOT_FOUND,
    component: () => import("@/views/NotFound.vue"),
  },
];
