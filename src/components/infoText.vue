<script setup>
import { computed } from "vue";
import { renderRichText } from "@storyblok/vue";
const { blok } = defineProps({ blok: Object });

const articleContent = computed(() => renderRichText(blok.content));
</script>

<template>
  <section v-editable="blok" class="w-screen bg-blauw-theme py-6">
    <div class="title container mx-auto">
      <div class="p-6">
        <h1 class="text-[35px] font-bold">{{ blok.title }}</h1>
      </div>
      <div
        class="text p-6 leading-7"
        v-aos
        data-aos="zoom-in"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <div
          v-html="articleContent"
          class="text flex flex-col gap-5 p-6 leading-7"
        ></div>
        <!-- <p>
          <span
            v-for="text in content.content"
            :class="{
              'font-bold':
                text.marks &&
                (text.marks[0].type === 'bold' ||
                  text.marks[1]?.type === 'bold'),
              italic:
                text.marks &&
                (text.marks[0].type === 'italic' ||
                  text.marks[1]?.type === 'italic'),
            }"
          >
            {{ text.text }}
          </span>
        </p> -->
      </div>
      <div class="container mt-4 flex justify-center">
        <a :href="blok.CV.filename" target="_blank">
          <button
            class="h-[62px] w-[260px] rounded-[86px] bg-orange-theme py-[11px] px-[76px] font-bold text-white transition hover:bg-hover-orange"
          >
            {{ blok.callToAction }}
          </button>
        </a>
      </div>
    </div>
  </section>
</template>
