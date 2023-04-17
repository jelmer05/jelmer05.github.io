<script setup>
const { blok } = defineProps({ blok: Object });
</script>

<template>
  <section class="flex w-4/5 justify-between gap-3 self-center">
    <div class="flex w-5/12 items-center">
      <StoryblokComponent
        v-for="blok in blok.Links"
        :blok="blok"
        :key="blok._uid"
      />
    </div>
    <div class="w-5/12">
      <StoryblokComponent
        v-for="blok in blok.Rechts"
        :blok="blok"
        :key="blok._uid"
      />
    </div>
  </section>
</template>
