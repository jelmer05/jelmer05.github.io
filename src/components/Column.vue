<script setup>
const { blok } = defineProps({ blok: Object });
</script>

<template>
  <section
    class="flex w-4/5 flex-col justify-between gap-3 self-center md:flex-row"
  >
    <div class="flex w-full items-center md:w-5/12">
      <StoryblokComponent
        v-for="blok in blok.Links"
        :blok="blok"
        :key="blok._uid"
      />
    </div>
    <div class="w-full md:w-5/12">
      <StoryblokComponent
        v-for="blok in blok.Rechts"
        :blok="blok"
        :key="blok._uid"
      />
    </div>
  </section>
</template>
