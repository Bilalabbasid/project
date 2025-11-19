import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import memberstackDOM from "@memberstack/dom";

// Memberstack is loaded via script tag in index.html
// No need to initialize it here

const app = createApp(App);

app.use(router);

app.mount("#app");
