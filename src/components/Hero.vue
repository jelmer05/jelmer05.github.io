<script setup>
import { ref } from "vue";
const { blok } = defineProps({ blok: Object });
</script>
<template>
  <section
    v-editable="blok"
    class="container mx-auto flex flex-col pt-2 lg:flex-row"
  >
    <div
      class="info-text flex w-full flex-col justify-center gap-5 lg:w-1/3 xl:w-2/3"
    >
      <div class="text flex flex-col gap-5">
        <div class="hi my-10 self-center sm:self-auto">
          <div
            class="hi-container w-28 rounded bg-orange-theme py-2 text-center"
          >
            <p>{{ blok.welcomeText }}</p>
          </div>
        </div>
        <div class="titel-text flex flex-col text-center sm:text-left">
          <h1
            class="mb-6 text-[49px] font-bold leading-10 sm:font-black md:w-[673px]"
          >
            {{ blok.title }}
          </h1>
          <p>{{ blok.slug }}</p>
        </div>
      </div>
      <div class="hidden gap-6 sm:flex">
        <div class="data my-10 flex w-20 flex-col justify-center gap-1">
          <div
            class="data-1 flex h-16 w-16 items-center justify-center self-center rounded-full bg-white-theme"
          >
            {{ blok.ideeen }}+
          </div>
          <p class="text-center">ideeën</p>
        </div>
        <div class="data my-10 flex w-20 flex-col justify-center gap-1">
          <div
            class="data-1 flex h-16 w-16 items-center justify-center self-center rounded-full bg-white-theme"
          >
            {{ blok.ideeen }}+
          </div>
          <p class="text-center">Projecten</p>
        </div>
      </div>
    </div>
    <div class="jelmerFoto relative w-full sm:mt-[-100px] lg:mt-[16px]">
      <img :src="blok.heroImg.filename" :alt="blok.heroImg.alt" class="" />
      <img
        src="https://a.storyblok.com/f/196239/354x353/4c01ffa1ec/ellipse-2.svg"
        alt="ellipse"
        class="lg-w-52 xl:w-50 animate absolute top-[5%] right-[20%] z-[-2] w-28 sm:w-52 lg:top-[6%] lg:right-[15%] 2xl:top-[5%] 2xl:right-[20%] 2xl:w-64"
      />
      <img
        src="https://a.storyblok.com/f/196239/354x353/d000ca7ec0/ellipse-1.svg"
        alt="ellipse"
        class="animate absolute left-[25%] bottom-[30%] z-[-2] w-28 sm:w-52 lg:left-[30%] lg:bottom-[30%] lg:w-52 2xl:left-[25%] 2xl:bottom-[30%] 2xl:w-64"
      />
    </div>
  </section>
</template>
