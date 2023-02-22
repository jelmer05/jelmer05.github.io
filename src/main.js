import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import "./assets/main.css";
import hero from "./components/Hero.vue";
import Page from "./components/Page.vue";

const app = createApp(App);

app.component("hero", hero);
app.component("Page", Page);

app.use(StoryblokVue, {
  accessToken: "QWGzMMqBPxmbAWvxNNUf2Att",

  bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production

  use: [apiPlugin],
});

app.use(router);

app.mount("#app");
