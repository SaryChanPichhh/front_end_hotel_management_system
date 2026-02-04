import "./assets/main.css";
import router from "./router"; // Import the router instance
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import "./assets/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PrimeVue from "primevue/config";
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(PrimeVue,{unstyled:true});
app.use(router);
app.use(createPinia());

app.mount("#app");
