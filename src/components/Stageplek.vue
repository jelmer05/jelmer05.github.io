<script setup>
import { renderRichText } from "@storyblok/vue";
import { computed } from "vue";

const { blok } = defineProps({ blok: Object });
const articleContent = computed(() => renderRichText(blok.verhaal));

const beginJaar = new Date(blok.Begin).getFullYear();
const beginMaand = "0" + new Date(blok.Begin).getMonth();
const eindJaar = new Date(blok.Eind).getFullYear();
const eindMaand = "0" + new Date(blok.Eind).getMonth();

const begin = beginMaand + "/" + beginJaar;
const eind = eindMaand + "/" + eindJaar;

const jarenActief = begin + " - " + eind;
</script>
<template>
  <section class="flex w-4/5 flex-col justify-center gap-8 self-center">
    <div class="container flex flex-col items-center gap-4 md:flex-row">
      <div class="flex items-center justify-center sm:w-4/12">
        <div
          class="flex w-1/2 items-center justify-center rounded-lg bg-white py-16 px-5 md:w-8/12 md:py-20"
        >
          <img :src="blok.logo.filename" alt="" />
        </div>
      </div>
      <div class="flex flex-col gap-4 md:w-7/12">
        <h1 class="text-[30px] font-bold sm:text-[35px]">
          {{ blok.bedrijfsnaam }}
        </h1>
        <h2>{{ jarenActief }}</h2>
        <div v-html="articleContent"></div>
      </div>
    </div>
  </section>
</template>
