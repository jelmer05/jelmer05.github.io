<script setup>
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <div>
    <img class="h-3/6 w-[727px]" :src="blok.img.filename" :alt="blok.img.alt" />
  </div>
</template>
