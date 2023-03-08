<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const { blok } = defineProps({ blok: Object });

const projecten = ref(blok.projecten.length + 3);

console.log(projecten.value);
</script>
<template>
  <section v-editable="blok" class="container mx-auto py-4">
    <h1 class="p-6 text-[35px] font-bold">{{ blok.titel }}</h1>
    <div
      class="project container flex flex-col flex-wrap items-center justify-around gap-5 sm:flex-row"
    >
      <div v-for="project in blok.projecten" class="w-2/3 sm:w-1/3">
        <img
          :src="project.content.previewImg.filename"
          alt=""
          class="rounded-lg"
        />
        <div class="text-container flex w-full justify-between gap-5 p-3">
          <h2 class="">{{ project.name }}</h2>
          <RouterLink :to="project.full_slug">
            <img
              src="../assets/icons/Arrow 1.svg"
              alt="icon"
              class="scale-x-[-1] rounded-full bg-orange-theme p-2 transition-all hover:bg-hover-orange"
            />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
