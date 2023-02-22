import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import "./assets/main.css";

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",

  bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production

  use: [apiPlugin],
});

app.use(router);

app.mount("#app");
