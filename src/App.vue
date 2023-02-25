<script setup>
import { RouterLink, RouterView } from "vue-router";

import Nav from "./components/Nav.vue";
// const story = await useStoryblok("nav", { version: "draft" });
</script>

<template>
  <div class="w-full bg-black-theme">
    <Suspense>
      <RouterView />
    </Suspense>
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap");

h1,
h2,
h3,
p {
  font-family: "Play", sans-serif;
  color: white;
}
</style>
