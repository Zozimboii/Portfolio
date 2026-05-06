<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import AboutSection from "~/components/sections/AboutSection.vue";
import CertificateSection from "~/components/sections/CertificateSection.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
import HomeSection from "~/components/sections/HomeSection.vue";
import ProjectsSection from "~/components/sections/ProjectsSection.vue";
import TechStackSection from "~/components/sections/TechStackSection.vue";

useHead({
  title: "Pruksakorn | Fullstack Developer",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Pruksakorn - Fullstack Developer building modern web applications",
    },

    { property: "og:title", content: "Pruksakorn Portfolio" },
    { property: "og:type", content: "website" },
    {
      property: "og:description",
      content: "Fullstack Developer Portfolio built with Nuxt",
    },
  ],
});
</script>

<template>
  <div
    class="bg-gradient-to-b from-black via-zinc-900 to-zinc-950 text-white min-h-screen"
  >
    <Navbar />
    <main class="px-4 sm:px-6">
      <HomeSection />

      <AboutSection />

      <TechStackSection />

      <ProjectsSection />

      <CertificateSection />

      <ContactSection />
    </main>
  </div>
</template>
