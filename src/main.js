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
import SolicitatiePage from "./components/SolicitatiePage.vue";
import Contact from "./components/Contact.vue";
import Project from "./components/Project.vue";
import Column from "./components/Column.vue";
import ImgBlok from "./components/ImgBlok.vue";
import Tekst from "./components/Tekst.vue";
import Logos from "./components/Logos.vue";
import Uitgelicht from "./components/Uitgelicht.vue";
import ProjectUit from "./components/ProjectUit.vue";
import Stageplek from "./components/Stageplek.vue";
import School from "./components/School.vue";
import Container from "./components/Container.vue";

import previewProject from "./components/previewProject.vue";

const app = createApp(App);

app.component("Hero", Hero);
app.component("Column", Column);
app.component("ImgBlok", ImgBlok);
app.component("Tekst", Tekst);
app.component("Logos", Logos);
app.component("Uitgelicht", Uitgelicht);
app.component("ProjectUit", ProjectUit);
app.component("Stageplek", Stageplek);
app.component("School", School);
app.component("Container", Container);

app.component("infoText", infoText);
app.component("Contact", Contact);
app.component("Project", Project);

app.component("previewProject", previewProject);

app.component("Page", Page);
app.component("SolicitatiePage", SolicitatiePage);

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
