<script setup>
import Storyblok from "storyblok-js-client";
import { computed } from "vue";
const Api = new Storyblok();

const { text } = defineProps({ text: String });

const richtext = computed(() => {
  return text ? Api.richTextResolver.render(text) : "";
});
console.log(text);
</script>
<!-- <script setup>
const { blok } = defineProps({ blok: Object });
</script> -->
<template>
  <section v-editable="blok" class="w-screen bg-blauw-theme py-6">
    <div class="title container mx-auto">
      <div class="p-6">
        <h1 class="text-[35px] font-bold">{{ blok.title }}</h1>
      </div>
      <div class="text p-6 leading-7">
        <div v-html="richtext"></div>
        <!-- <p v-for="content in tblok.content">
          {{ content.text }}
        </p> -->
      </div>
      <div class="container mt-4 flex justify-center">
        <button
          class="h-[62px] w-[260px] rounded-[86px] bg-orange-theme py-[11px] px-[76px] text-white transition hover:bg-hover-orange"
        >
          {{ blok.callToAction }}
        </button>
      </div>
    </div>
  </section>
</template>
