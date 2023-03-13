<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Nav from "./components/Nav.vue";
<<<<<<< HEAD
=======
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
>>>>>>> origin/Website
</script>

<template>
  <div class="relative z-[-10] w-full bg-black-theme">
<<<<<<< HEAD
=======
    <Nav :isScrolled="scrollPosition > 30" />
>>>>>>> origin/Website
    <Suspense>
      <div class="pt-[144px]">
        <RouterView />
      </div>
    </Suspense>
    <Footer />
  </div>
</template>
<style>
<<<<<<< HEAD
@font-face {
=======
/* @font-face {
>>>>>>> origin/Website
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Bold.eot");
  src: local("Avenir Next Cyr Bold"), local("AvenirNextCyr-Bold"),
    url("../assets/font/AvenirNextCyr-Bold.eot?#iefix")
      format("embedded-opentype"),
<<<<<<< HEAD
    url("../assets/font/AvenirNextCyr-Bold.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-Bold.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-Bold.ttf") format("truetype");
=======
    url("../assets/AvenirNextCyr-Bold.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-Bold.woff") format("woff"),
    url("../assets/AvenirNextCyr-Bold.ttf") format("truetype");
>>>>>>> origin/Website
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Italic.eot");
  src: local("Avenir Next Cyr Italic"), local("AvenirNextCyr-Italic"),
<<<<<<< HEAD
    url("../assets/font/AvenirNextCyr-Italic.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-Italic.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-Italic.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-Italic.ttf") format("truetype");
=======
    url("../assets/AvenirNextCyr-Italic.eot?#iefix") format("embedded-opentype"),
    url("../assets/AvenirNextCyr-Italic.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-Italic.woff") format("woff"),
    url("../assets/AvenirNextCyr-Italic.ttf") format("truetype");
>>>>>>> origin/Website
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
<<<<<<< HEAD
    url("../assets/font/AvenirNextCyr-HeavyItalic.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-HeavyItalic.ttf") format("truetype");
=======
    url("../assets/AvenirNextCyr-HeavyItalic.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/AvenirNextCyr-HeavyItalic.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-HeavyItalic.woff") format("woff"),
    url("../assets/AvenirNextCyr-HeavyItalic.ttf") format("truetype");
>>>>>>> origin/Website
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: "Avenir Next Cyr";
  src: url("AvenirNextCyr-Regular.eot");
  src: local("Avenir Next Cyr Regular"), local("AvenirNextCyr-Regular"),
<<<<<<< HEAD
    url("../assets/font/AvenirNextCyr-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/font/AvenirNextCyr-Regular.woff2") format("woff2"),
    url("../assets/font/AvenirNextCyr-Regular.woff") format("woff"),
    url("../assets/font/AvenirNextCyr-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
=======
    url("../assets/AvenirNextCyr-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../assets/AvenirNextCyr-Regular.woff2") format("woff2"),
    url("../assets/AvenirNextCyr-Regular.woff") format("woff"),
    url("../assets/AvenirNextCyr-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
} */
>>>>>>> origin/Website

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
