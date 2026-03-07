// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [// เพิ่มตัวนี้เข้าไป
  "@nuxtjs/tailwindcss", "@nuxt/image"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // ระบุ Path ของไฟล์ config ของคุณ
    configPath: "./tailwind.config.js",
  },
});