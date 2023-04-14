import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/main.css";
import Hero from "./components/Hero.vue";
import infoText from "./components/infoText.vue";
import Page from "./components/Page.vue";
import Contact from "./components/Contact.vue";
import Project from "./components/Project.vue";
import Column from "./components/Column.vue";
import ImgBlok from "./components/ImgBlok.vue";
import Text from "./components/Text.vue";

import previewProject from "./components/previewProject.vue";

const app = createApp(App);

app.component("Hero", Hero);
app.component("Column", Column);
app.component("ImgBlok", ImgBlok);
app.component("Text", Text);

app.component("infoText", infoText);
app.component("Contact", Contact);
app.component("Project", Project);

app.component("previewProject", previewProject);

app.component("Page", Page);

app.use(StoryblokVue, {
  accessToken: "QWGzMMqBPxmbAWvxNNUf2Att",
  bridge: true, // enable the bridge
  // bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production

  use: [apiPlugin],
});

app.use(router);

app.directive("aos", {
  mounted(el) {
    AOS.init({
      // options
    });
  },
});

app.mount("#app");
