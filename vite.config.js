import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createServer } from "vite";

export default defineConfig({
  plugins: [vue()],
  server: {
    https: {
      key: "./localhost-key.pem",
      cert: "./localhost.pem",
    },
  },
  // Move createServer inside the defineConfig function
  createServer: {
    https: {
      key: "./localhost-key.pem",
      cert: "./localhost.pem",
    },
  },
  build: {
    sourcemap: true,
  },
});
