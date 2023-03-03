<script setup>
defineProps({ blok: Object });
</script>
<template>
  <div class="container-fluid bg-blauw-theme">
    <section
      v-editable="blok"
      class="contact container mx-auto flex flex-col items-center gap-6 py-2"
    >
      <h1 class="text-[35px] font-bold">{{ blok.Title }}</h1>
      <p>{{ blok.slug }}</p>
      <div class="flex items-center justify-center gap-2">
        <img :src="blok.icon.filename" :alt="blok.icon.alt" class="h-6 w-6" />
        <button
          class="h-[62px] w-[260px] rounded-[86px] bg-orange-theme py-[11px] px-[76px] font-medium text-white transition hover:bg-hover-orange"
        >
          {{ blok.CTA }}
        </button>
        <img
          :src="blok.icon.filename"
          :alt="blok.icon.alt"
          class="h-6 w-6 scale-x-[-1]"
        />
      </div>
    </section>
  </div>
</template>
