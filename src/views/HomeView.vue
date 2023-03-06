<script setup>
import { useStoryblok } from "@storyblok/vue";
const story = await useStoryblok("home", {
  version: "draft",
});
</script>
<template>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
