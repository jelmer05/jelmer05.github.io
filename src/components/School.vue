<script setup>
const { blok } = defineProps({ blok: Object });

const beginJaar = new Date(blok.begin).getFullYear();
const beginMaand = ("0" + (new Date(blok.begin).getMonth() + 1)).slice(-2);

const eindJaar = new Date(blok.eind).getFullYear();
const eindMaand = ("0" + (new Date(blok.eind).getMonth() + 1)).slice(-2);

const begin = beginMaand + "/" + beginJaar;
const eind = eindMaand + "/" + eindJaar;

const jarenActief = begin + " - " + eind;
</script>
<template>
  <div class="flex flex-col gap-10 self-center sm:w-1/3">
    <div class="flex flex-col gap-3">
      <p>{{ blok.preHeader }}</p>
      <h1 class="font-bold">{{ blok.titel }}</h1>
    </div>

    <div class="flex gap-4">
      <p>
        {{ jarenActief }}
      </p>
    </div>
  </div>
</template>
