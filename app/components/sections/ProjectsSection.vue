<script setup lang="ts">
import { projects } from "~/data/project";
</script>

<template>
  <section id="projects" class="max-w-6xl mx-auto px-6 py-20 md:py-28">
    <h2 class="text-3xl font-bold mb-16">
      My <span class="text-purple-400">Projects</span>
    </h2>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="project in projects"
        :key="project.name"
        class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500"
      >
        <NuxtImg :src="project.image" class="w-full h-40 object-cover" />

        <div class="p-6">
          <h3 class="text-lg font-semibold mb-3">
            {{ project.name }}
          </h3>

          <p class="text-gray-400 text-sm mb-4 leading-relaxed">
            {{ project.description }}
          </p>

          <ul class="text-xs text-gray-500 mb-4 space-y-1">
            <li v-for="f in project.features" :key="f">- {{ f }}</li>
          </ul>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="t in project.tech"
              :key="t"
              class="text-xs px-2 py-1 bg-slate-800 border border-slate-700 rounded"
            >
              {{ t }}
            </span>
          </div>

          <div v-if="project.demos && project.demos.length" class="mb-4">
            <p class="text-sm text-purple-400 mb-2">Video Demo</p>

            <div class="flex flex-col gap-2">
              <a
                v-for="demo in project.demos"
                :key="demo.name"
                :href="demo.url"
                target="_blank"
                class="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>

                <span>{{ demo.name }}</span>
              </a>
            </div>
          </div>
          <div v-if="project.githubs" class="flex gap-2 mt-4 flex-wrap">
            <a
              v-for="repo in project.githubs"
              :key="repo.url"
              :href="repo.url"
              target="_blank"
              class="text-xs px-3 py-1 border border-slate-700 rounded hover:border-purple-500"
            >
              {{ repo.name }}
            </a>
          </div>

          <p
            v-if="project.note"
            class="text-xs text-gray-500 border-t border-slate-800 pt-3"
          >
            {{ project.note }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
