import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import VueEasyLightbox from "vue-easy-lightbox";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

library.add(fas, far);

app.use(VueEasyLightbox);
app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
