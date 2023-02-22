<template>
  <div v-editable="blok" class="py-2">
    <h1>hoi</h1>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
console.log(blok);
</script>
