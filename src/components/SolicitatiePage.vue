<template>
  <section v-editable="blok" class="flex flex-col gap-6">
    <div
      class="header container my-4 mx-auto flex flex-col items-center justify-center gap-6 p-3"
    >
      <div class="flex w-3/5 flex-col justify-between gap-4 self-start">
        <router-link to="/" class="flex items-center gap-2 hover:animate-pulse"
          ><img
            src="https://a.storyblok.com/f/196239/30x24/8b7ac5d55c/arrow-1.svg"
            alt="icon"
            class="w-[20px]"
          />
          <p class="w-96 text-xs">back to home</p>
        </router-link>
        <h1 class="text-[30px] font-bold sm:text-[35px]">
          {{ blok.name }}
        </h1>
      </div>
    </div>

    <div
      class="technieken container mx-auto flex flex-col items-center justify-center"
    ></div>

    <StoryblokComponent
      v-for="blok in blok.solicitatiePage"
      :blok="blok"
      :key="blok._uid"
    />
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({ blok: Object });
</script>
