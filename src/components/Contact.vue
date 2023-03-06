<script setup>
defineProps({ blok: Object });
</script>
<template>
  <div class="container-fluid bg-blauw-theme">
    <section
      v-editable="blok"
      class="contact container mx-auto flex flex-col items-center gap-6 py-4"
    >
      <h1 class="text-[25px] font-bold sm:text-[35px]">{{ blok.Title }}</h1>
      <p>{{ blok.slug }}</p>
      <div class="flex items-center justify-center gap-2">
        <img
          v-if="blok.icon.filename"
          :src="blok.icon.filename"
          :alt="blok.icon.alt"
          class="h-6 w-6 opacity-50"
        />
        <button
          class="h-[52px] w-[250px] rounded-[86px] bg-orange-theme py-[11px] px-[76px] font-medium text-white transition hover:bg-hover-orange"
        >
          <a :href="`mailto:${blok.mailTo}`">
            <p class="w-full font-bold">
              {{ blok.CTA }}
            </p>
          </a>
        </button>
        <img
          v-if="blok.icon.filename"
          :src="blok.icon.filename"
          :alt="blok.icon.alt"
          class="h-6 w-6 scale-x-[-1] opacity-50"
        />
      </div>
    </section>
  </div>
</template>
