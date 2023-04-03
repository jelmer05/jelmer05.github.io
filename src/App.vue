<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
const scrollPosition = ref(false);

const handleScroll = () => {
  scrollPosition.value = window.scrollY;
};

// voeg een event listener toe voor het scrollen
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// verwijder de event listener wanneer het component wordt unmounted
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="relative z-[-10] w-full overscroll-none bg-black-theme">
    <Nav :isScrolled="scrollPosition > 30" />
    <Suspense>
      <div class="pt-[144px]">
        <RouterView />
      </div>
    </Suspense>
    <Footer />
  </div>
</template>
<style>
@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Bold.eot");
  src: local("Avenir Next Cyr Bold"), local("AvenirNextCyr-Bold"),
    url("../assets/font/AvenirNextCyr-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/AvenirNextCyr-Bold.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-Bold.woff") format("woff"),
    url("../assets/AvenirNextCyr-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Italic.eot");
  src: local("Avenir Next Cyr Italic"), local("AvenirNextCyr-Italic"),
    url("../assets/AvenirNextCyr-Italic.eot?#iefix") format("embedded-opentype"),
    url("../assets/AvenirNextCyr-Italic.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-Italic.woff") format("woff"),
    url("../assets/AvenirNextCyr-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
  font-display: swap;
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
  font-display: swap;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-HeavyItalic.eot");
  src: local("Avenir Next Cyr Heavy Italic"), local("AvenirNextCyr-HeavyItalic"),
    url("../assets/AvenirNextCyr-HeavyItalic.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/AvenirNextCyr-HeavyItalic.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-HeavyItalic.woff") format("woff"),
    url("../assets/AvenirNextCyr-HeavyItalic.ttf") format("truetype");
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Regular.eot");
  src: local("Avenir Next Cyr Regular"), local("AvenirNextCyr-Regular"),
    url("../assets/AvenirNextCyr-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/AvenirNextCyr-Regular.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-Regular.woff") format("woff"),
    url("../assets/AvenirNextCyr-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
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
