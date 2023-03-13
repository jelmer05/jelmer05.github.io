<template>
  <main class="flex h-screen w-full flex-col items-center justify-center">
    <h1 class="text-9xl font-extrabold tracking-widest text-white">404</h1>
    <div class="absolute rotate-12 rounded bg-orange-theme px-2 text-sm">
      Page Not Found
    </div>
    <button class="mt-5">
      <a
        class="group relative inline-block text-sm font-medium text-orange-theme focus:outline-none focus:ring active:text-hover-orange"
      >
        <span
          class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-orange-theme transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span
          class="relative block border border-current bg-[#1A2238] px-8 py-3"
        >
          <router-link to="/">Go Home</router-link>
        </span>
      </a>
    </button>
  </main>
</template>
