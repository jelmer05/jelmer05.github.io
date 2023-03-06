<script setup></script>
<template>
  <div class="fixed w-full bg-black-theme">
    <header v-editable="blok" class="flex justify-center">
      <div class="container flex justify-between pt-4">
        <div class="logo flex items-center gap-3">
          <div
            class="rounded-lg bg-black px-6 py-4 text-center font-black text-white"
          >
            <h1>J</h1>
          </div>
          <h2 class="upper hidden font-bold uppercase text-white sm:block">
            Jelmer van der veen
          </h2>
        </div>
        <div class="icons flex items-center gap-4">
          <a href="https://github.com/jelmer05" target="_blank">
            <img
              src="../assets/icons/github.svg"
              alt="github"
              class="max-w-[80%] border-orange-theme transition-all hover:border-b-2 hover:border-dotted hover:pb-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jelmer-van-der-veen-06817221b/"
            target="_blank"
          >
            <img
              src="../assets/icons/linkedin.svg"
              alt="linkedin"
              class="max-w-[80%] border-orange-theme transition-all hover:border-b-2 hover:border-dotted hover:pb-1"
            />
          </a>
        </div>
      </div>
    </header>
  </div>
</template>
