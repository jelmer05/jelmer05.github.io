<script setup>
defineProps({ blok: Object });
</script>
<template>
  <section v-editable="blok" class="py-2"></section>
</template>
