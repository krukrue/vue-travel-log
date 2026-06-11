import tailwindcss from "@tailwindcss/vite";
import "./app/lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  colorMode: {
    dataValue: "theme",
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["./app/assets/css/main.css"],
  eslint: {
    config: {
      standalone: false,
    },
  },
});
