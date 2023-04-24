<script setup>
import { computed } from "vue";
import { renderRichText } from "@storyblok/vue";
const { blok } = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(blok.main));
</script>
<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-[35px] font-bold">{{ blok.Titel }}</h1>
    <div
      v-html="articleContent"
      class="text flex flex-col gap-5 leading-7"
    ></div>
  </div>
</template>
