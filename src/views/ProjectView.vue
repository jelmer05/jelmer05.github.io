<script setup>
import { useRoute } from "vue-router";
import { useStoryblok } from "@storyblok/vue";

const route = useRoute();

const story = await useStoryblok(`project/${route.params.slug}`, {
  version: "draft",
});
</script>
<template>
  <main>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </main>
</template>
