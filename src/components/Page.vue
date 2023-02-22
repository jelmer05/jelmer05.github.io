<template>
  <div v-editable="blok" class="px-6">
    {{ blok }}
    <StoryblokComponent
      v-for="blok in blok.body"
      :blok="blok"
      :key="blok._uid"
    />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
