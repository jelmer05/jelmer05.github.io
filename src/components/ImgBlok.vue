<script setup>
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <div :class="{ 'bg-white': blok.witbg }" class="w-full rounded-lg py-20">
    <div class="container flex items-center justify-center rounded-lg">
      <img
        class="h-3/6 w-[727px]"
        :src="blok.img.filename"
        :alt="blok.img.alt"
      />
    </div>
  </div>
</template>
