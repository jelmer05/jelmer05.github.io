<script setup>
const { blok } = defineProps({ blok: Object });
console.log(blok.spiegel);
</script>

<template>
  <div
    class="background flex w-full justify-center self-center py-3"
    :class="{ ' bg-blauw-theme': blok.background }"
  >
    <section
      class="flex w-4/5 flex-col justify-between gap-3 self-center py-3 md:flex-row"
    >
      <div
        class="md:order1 flex w-full items-center md:w-5/12"
        :class="{ 'order-2': blok.spiegel }"
      >
        <StoryblokComponent
          v-for="blok in blok.Links"
          :blok="blok"
          :key="blok._uid"
        />
      </div>
      <div
        class="w-full md:order-2 md:w-5/12"
        :class="{ 'order-1': blok.spiegel }"
      >
        <StoryblokComponent
          v-for="blok in blok.Rechts"
          :blok="blok"
          :key="blok._uid"
        />
      </div>
    </section>
  </div>
</template>
