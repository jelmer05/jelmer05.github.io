<script setup>
defineProps({ blok: Object });
</script>
<template>
  <div v-editable="blok" class="">
    <StoryblokComponent
      v-for="blok in blok.Home"
      :blok="blok"
      :key="blok._uid"
    />
  </div>
</template>
