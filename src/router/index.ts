import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { registerAuthGuard } from "./guards";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
