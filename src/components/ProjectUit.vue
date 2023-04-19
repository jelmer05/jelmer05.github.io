<script setup>
import { RouterLink } from "vue-router";
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <div class="flex flex-col gap-10 self-center sm:w-1/3">
    <div class="flex flex-col gap-3">
      <h1 class="font-bold">{{ blok.titel }}</h1>
      <p>{{ blok.platform }}</p>
    </div>
    <img :src="blok.Afbeelding.filename" :alt="blok.Afbeelding.alt" />
    <div class="flex gap-4">
      <a v-if="blok.github.url" :href="blok.github.url" target="_blank">
        <button
          class="h-[50px] w-[200px] rounded-[86px] border-2 border-orange-theme py-[8px] px-[50px] text-white transition ease-out hover:bg-orange-theme"
        >
          Github Repo
        </button>
      </a>
      <RouterLink :to="`/${blok.project.cached_url}`">
        <img
          src="https://a.storyblok.com/f/196239/30x24/8b7ac5d55c/arrow-1.svg"
          alt="icon"
          class="max-w-[100px] scale-x-[-1] rounded-full bg-orange-theme p-3 transition-all hover:bg-hover-orange"
        />
      </RouterLink>
    </div>
  </div>
</template>
