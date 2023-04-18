<script setup>
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <div class="container flex flex-wrap justify-center gap-10">
    <div
      class="flex w-1/4 flex-col items-center justify-center gap-2"
      v-for="logo in blok.Logo"
    >
      <img
        class="h-[104px] w-[91.01px]"
        :src="logo.filename"
        :alt="logo.title"
      />
      <p>{{ logo.title }}</p>
    </div>
  </div>
</template>
