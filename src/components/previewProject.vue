<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <section v-editable="blok" id="projects" class="container mx-auto py-4">
    <h1 class="p-6 text-[35px] font-bold">{{ blok.titel }}</h1>
    <div
      v-aos
      data-aos="zoom-in"
      data-aos-once="true"
      data-aos-duration="1000"
      class="project container flex flex-col flex-wrap items-center justify-around gap-5 sm:flex-row"
    >
      <div v-for="project in blok.projecten" class="w-2/3 sm:w-1/3">
        <img
          :src="project.content.previewImg.filename"
          alt=""
          class="rounded-lg"
        />
        <div
          class="text-container mt-2 flex items-center justify-between gap-1 sm:gap-5"
        >
          <h2 class="max-w-[70%]">{{ project.name }}</h2>
          <RouterLink :to="project.full_slug">
            <img
              src="url('https://a.storyblok.com/f/196239/30x24/8b7ac5d55c/arrow-1.svg')"
              alt="icon"
              class="max-w-[100px] scale-x-[-1] rounded-full bg-orange-theme p-3 transition-all hover:bg-hover-orange"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
