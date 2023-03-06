<script setup>
import { useRoute } from "vue-router";
import { useStoryblok } from "@storyblok/vue";
const route = useRoute();

let story = null;

const searchProject = route.params.slug;

try {
  story = await useStoryblok(`project/${route.params.slug}`, {
    version: "draft",
  });
} catch (error) {
  console.error(`project ${searchProject} not found`);
}
</script>
<template>
  <nav />
  <main>
    <StoryblokComponent v-if="story !== null" :blok="story.content" />
    <div
      v-else
      class="flex h-screen w-screen flex-col items-center justify-center gap-3 text-center"
    >
      <h1 class="font-black">404</h1>
      <p>Het gezochte project is niet gevonden</p>
      <p class="font-bold">{{ searchProject }}</p>
    </div>
  </main>
</template>
