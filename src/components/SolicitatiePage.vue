<script setup>
import { RouterLink } from "vue-router";
defineProps({ blok: Object });
</script>
<template>
  <section v-editable="blok" class="flex flex-col gap-1">
    <div
      class="header container my-4 mx-auto flex flex-col items-center justify-center gap-6 p-3"
    >
      <div
        class="flex w-full flex-col justify-center gap-10 self-start md:justify-start md:gap-3"
      >
        <router-link
          to="/"
          class="flex w-2/5 items-center gap-2 hover:animate-pulse"
          ><img
            src="https://a.storyblok.com/f/196239/30x24/8b7ac5d55c/arrow-1.svg"
            alt="icon"
            class="w-[20px]"
          />
          <p class="hidden w-96 text-xs sm:block">back to home</p>
        </router-link>
        <div class="flex flex-col items-center gap-2 md:gap-6">
          <h1 class="text-[40px] font-black sm:text-[60px]">Stage Duracom</h1>
          <h2>E-commerce Manager</h2>
        </div>
      </div>
    </div>

    <StoryblokComponent
      v-for="blok in blok.solicitatiePage"
      :blok="blok"
      :key="blok._uid"
    />
  </section>
</template>
