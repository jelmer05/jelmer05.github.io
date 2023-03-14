<script setup>
import { useStoryblok } from "@storyblok/vue";
const story = await useStoryblok(
  "home",
  {
    version: "published",
    resolve_relations: "previewProject.projecten",
  },
  {
    resolveRelations: ["previewProject.projecten"],
  }
);
</script>
<template>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
