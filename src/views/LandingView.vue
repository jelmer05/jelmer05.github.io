<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStoryblok } from "@storyblok/vue";
import PagenotFound from "./pageNotFoundView.vue";
const route = useRoute();

let story = null;

const searchSolicitatie = route.params.slug;

try {
  story = await useStoryblok(`solicitatie/${route.params.slug}`, {
    version: "draft",
  });
} catch (error) {
  console.error(`project ${searchSolicitatie} not found`);
}

const name = ref(story);
</script>
<template>
  <StoryblokComponent v-if="story" :blok="story.content" :name="name" />
  <PagenotFound v-else />
</template>
