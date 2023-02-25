<script setup>
import { isSVGTag } from "@vue/shared";
import { ref } from "vue";
const { blok } = defineProps({ blok: Object });

const logoText = ref(blok.titel.charAt(0).toUpperCase());
</script>
<template>
  <header v-editable="blok">
    <div class="container flex justify-around pt-4">
      <div class="logo flex items-center gap-3">
        <div class="rounded-lg bg-black px-6 py-4 text-center text-white">
          <h2>{{ logoText }}</h2>
        </div>
        <h2 class="upper hidden uppercase text-white sm:block">
          {{ blok.titel }}
        </h2>
      </div>
      <div class="icons flex items-center gap-4">
        <div v-for="icon in blok.Icons">
          <a :href="icon.source" target="_blank">
            <img
              :src="icon.filename"
              alt="icon.name"
              class="max-w-[80%] border-orange-theme transition-all hover:border-b-2 hover:border-dotted hover:pb-1"
            />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped></style>
