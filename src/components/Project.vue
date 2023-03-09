<script setup>
import { RouterLink } from "vue-router";
defineProps({ blok: Object });
</script>
<template>
  <section v-editable="blok" class="flex flex-col gap-6">
    <div
      class="header container my-4 mx-auto flex flex-col items-center justify-center gap-6 p-3"
    >
      <div class="flex w-3/5 flex-col justify-between gap-4 self-start">
        <router-link to="/" class="flex items-center gap-2 hover:animate-pulse"
          ><img src="../assets/icons/Arrow 1.svg" alt="icon" class="w-[20px]" />
          <p class="w-96 text-xs">back to home</p>
        </router-link>

        <h1 class="text-[30px] font-bold sm:text-[35px]">
          <a :href="blok.Link.url" :target="blok.Link.target">{{
            blok.title
          }}</a>
        </h1>
      </div>
      <div class="flex justify-center">
        <video
          class="video scale-up-center aspect-video w-10/12 self-center rounded-lg sm:w-6/12"
          autoplay=""
          loop=""
          muted=""
        >
          Je browser ondersteund helaas geen video.
          <source :src="blok.mainBanner.filename" />
        </video>
      </div>
    </div>

    <div
      class="technieken container mx-auto flex flex-col items-center justify-center"
    >
      <div class="flex w-full justify-evenly">
        <div v-for="techniek in blok.technieken" class="relative">
          <h1 class="font-medium">{{ techniek }}</h1>
          <div
            class="frame absolute left-0 top-3/4 z-[-1] w-full bg-orange-theme py-1 opacity-80"
          ></div>
        </div>
      </div>
    </div>
    <main class="container mx-auto">
      <h1 class="p-2 text-[25px] font-bold">Over dit project</h1>
      <div class="text p-2 leading-7" v-for="content in blok.mainText.content">
        <p>
          <span
            :class="{
              'font-bold': text.marks && text.marks[0].type === 'bold',
              italic: text.marks && text.marks[0].type === 'italic',
            }"
            v-for="text in content.content"
            >{{ text.text }}</span
          >
        </p>
      </div>
    </main>
    <StoryblokComponent
      v-for="blok in blok.contact"
      :blok="blok"
      :key="blok._uid"
    />
  </section>
</template>
