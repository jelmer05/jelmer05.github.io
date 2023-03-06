<script setup>
import { RouterLink, RouterView } from "vue-router";

import Nav from "./components/Nav.vue";
</script>

<template>
  <div class="relative z-[-10] w-full bg-black-theme">
    <Nav />
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
<style>
@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Bold.eot");
  src: local("Avenir Next Cyr Bold"), local("AvenirNextCyr-Bold"),
    url("../assets/font/AvenirNextCyr-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-Bold.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-Bold.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Italic.eot");
  src: local("Avenir Next Cyr Italic"), local("AvenirNextCyr-Italic"),
    url("../assets/font/AvenirNextCyr-Italic.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-Italic.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-Italic.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-BoldItalic.eot");
  src: local("Avenir Next Cyr Bold Italic"), local("AvenirNextCyr-BoldItalic"),
    url("AvenirNextCyr-BoldItalic.eot?#iefix") format("embedded-opentype"),
    url("AvenirNextCyr-BoldItalic.woff2") format("woff2"),
    url("AvenirNextCyr-BoldItalic.woff") format("woff"),
    url("AvenirNextCyr-BoldItalic.ttf") format("truetype");
  font-weight: bold;
  font-style: italic;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-HeavyItalic.eot");
  src: local("Avenir Next Cyr Heavy Italic"), local("AvenirNextCyr-HeavyItalic"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.ttf") format("truetype");
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Regular.eot");
  src: local("Avenir Next Cyr Regular"), local("AvenirNextCyr-Regular"),
    url("../assets/font/AvenirNextCyr-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-Regular.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-Regular.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

h1,
h2,
h3,
p {
  font-family: "Avenir Next Cyr", sans-serif;
  color: white;
}
h1 {
  font-weight: 900;
}
</style>
