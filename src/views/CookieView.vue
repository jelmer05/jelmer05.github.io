<script>
export default {
  name: "Cookiebot",
  mounted() {
    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.src =
      "https://consent.cookiebot.com/a971830f-b965-4fc6-a4b7-3e84567a5198/cd.js";
    script.async = true;
    document.body.appendChild(script);
  },
};
</script>
<template>
  <div class="bg-black-theme"></div>
</template>
