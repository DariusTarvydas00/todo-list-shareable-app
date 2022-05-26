import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { createPinia } from 'pinia'

const app = createApp(App)
app.config.globalProperties.hostname = "http://nestjs_backend"
app.use(store).use(router).use(createPinia()).mount("#app");
