import type { RouteRecordRaw } from "vue-router";
import { ROUTE_NAME } from "./route-name";
import { ROUTE_PATH } from "./route-path";

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
    redirect: ROUTE_PATH.DASHBOARD,
    children: [
      {
        path: ROUTE_PATH.DASHBOARD,
        component: () => import("@/views/Dashboard.vue"),
        name: ROUTE_NAME.DASHBOARD,
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
        path: "/general-setting",
        children: [
          {
            path: ROUTE_PATH.STOCK,
            component: () => import("@/views/stock/Inventory.vue"),
            name: ROUTE_NAME.STOCK,
          },
        ],
      },
      {
        path: "/customer",
        children: [
          {
            path: ROUTE_PATH.GUEST,
            component: () => import("@/views/customer/Customer.vue"),
            name: ROUTE_NAME.GUEST,
          },
          {
            path: ROUTE_PATH.GUEST_HISTORY,
            component: () =>
              import("@/views/customer/CustomerReversationHist.vue"),
            name: ROUTE_NAME.GUEST_HISTORY,
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
      {
        path: "/about",
        children: [
          {
            path: ROUTE_PATH.ABOUT,
            component: () => import("@/views/about/About.vue"),
            name: ROUTE_NAME.ABOUT,
          },
        ],
      },
      {
        path: "/app/permission",
        children: [
          {
            path: ROUTE_PATH.PERMISSION,
            component: () => import("@/views/permission/Permission.vue"),
            name: ROUTE_NAME.PERMISSION,
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
