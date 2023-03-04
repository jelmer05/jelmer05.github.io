<script setup>
import { ref } from "vue";
const { blok } = defineProps({ blok: Object });

const year = ref(new Date().getFullYear());
</script>
<template>
  <footer v-editable="blok" class="container mx-auto flex justify-center py-4">
    <P>© {{ year }} Jelmer van der Veen</P>
  </footer>
</template>
