<script setup>
const { blok } = defineProps({ blok: Object });
</script>

<template>
  <div
    class="background flex w-full justify-center self-center py-3"
    :class="{ ' bg-blauw-theme': blok.background }"
  >
    <section class="flex w-4/5 flex-col justify-center gap-8 self-center py-4">
      <div class="text-center">
        <h1 class="text-[30px] font-bold sm:text-[35px]">{{ blok.titel }}</h1>
      </div>
      <div class="flex flex-col justify-center gap-16 sm:flex-row">
        <StoryblokComponent
          v-for="blok in blok.projecten"
          :blok="blok"
          :key="blok._uid"
        />
      </div>
    </section>
  </div>
</template>
