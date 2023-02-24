<script setup>
import { RouterLink, RouterView } from "vue-router";

import Nav from "./components/Nav.vue";
</script>

<template>
  <Nav />
  <Suspense>
    <RouterView />
  </Suspense>
</template>
