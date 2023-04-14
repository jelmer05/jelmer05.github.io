<script setup>
const { blok } = defineProps({ blok: Object });
</script>

<template>
  <StoryblokComponent v-for="blok in blok.Page" :blok="blok" :key="blok._uid" />
</template>
