<script setup lang="ts">
import { techStacks } from "~/data/techstack";
</script>

<template>
  <section id="skills" class="max-w-6xl mx-auto px-6 py-20 md:py-28">
    <h3 class="text-2xl md:text-3xl font-bold mb-12 text-center">
      Tech Stack ที่รู้จักและเคยใช้
    </h3>

    <div
      class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8"
    >
      <div
        v-for="tech in techStacks"
        :key="tech.name"
        class="flex flex-col items-center"
      >
        <NuxtImg
          :src="tech.icon"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 grayscale hover:grayscale-0 hover:scale-110 transition"
        />

        <span class="text-xs md:text-sm text-gray-400 mt-2">
          {{ tech.name }}
        </span>
      </div>
    </div>
  </section>
</template>
