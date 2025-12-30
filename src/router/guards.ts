import type { Router } from "vue-router";
import { ROUTE_NAME } from "./route-name";

export function registerAuthGuard(router: Router): void {
  router.beforeEach((to, _from, next) => {
    const isAuthenticated = Boolean(localStorage.getItem("token"));

    next();
  });
}
