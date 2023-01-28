import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/css/main.css";

import axiosInstance from "./plugins/axios";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
app.config.globalProperties.axios = axiosInstance