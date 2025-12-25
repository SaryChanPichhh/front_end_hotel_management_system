import "./assets/main.css";
import router from "./router"; // Import the router instance
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/index.css";
const app = createApp(App);
app.use(router);
app.use(createPinia());

app.mount("#app");
