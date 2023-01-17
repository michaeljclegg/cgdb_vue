import { createApp } from "vue";
import { createPinia } from "pinia";
import db from "../src/firebase/index.js";

import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
