<script setup>
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <div class="flex gap-10">
    <div class="flex w-1/4 flex-col" v-for="logo in blok.logo">
      {{ logo }}
    </div>
  </div>
</template>
